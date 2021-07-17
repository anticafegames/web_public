import { call, select, take, put, race, delay } from 'redux-saga/effects'
import bridge from '@vkontakte/vk-bridge'

import { waitCallback, errorSagaKey, waitSuccess } from '../../../core/code/ducks/saga-helper'
import { iAuthVkResponse, iAppKey } from '../../../core/ducks/authentication/entity/interface'
import Api from '../../../core/code/api'
import { waitAuthenticationSelector, AUTH_SUCCESS, LOG_IN_SUCCESS, AUTH_REQUEST } from '../../../core/ducks/authentication'
import { isAuthorizedSelector } from '../../../core/ducks/authentication'
import { vkAppId, regexVkHash, vkAuthUrl, vkAuthPopupParams, vkMiniAppKey, vkGameAppKey } from '../../../core/config/vk-config'
import { loadUserSaga, userSelector, LOAD_USER_SUCCESS } from '../../../core/ducks/user'
import { infoMessage, errorMessage } from '../../../core/code/messages'
import { iVkAuth, iAnticafeAuthResponse } from '../../../core/code/api/vk-api/interface'
import { iResult } from '../../../core/code/common/interfaces'
import LocalStorage from '../../../core/code/local-storage'
import { querySelector } from '../../../core/ducks/router'
import jwt_decode from 'jwt-decode'
import Toasts from '../../../core/code/alerts/toast'
import Modals from '../../../core/code/modals'
import { loginMode } from '../../../core/code/api/vk-api/vk-api-helper'

declare const window: any

export function* login(loginMode: loginMode) {

    const waitAuthentication: boolean = yield select(waitAuthenticationSelector)
    if (waitAuthentication) return 'waitAuthentication'

    yield put({ type: AUTH_REQUEST })

    const action = loginMode === 'check' ? checkLoginAction : loginAction
    const { error, result }: iResult<iAnticafeAuthResponse> = yield call(action)

    if (!error) {

        yield put({
            type: LOG_IN_SUCCESS,
            payload: { vkAuth: result }
        })

        LocalStorage.setObjectToStorage(result!.anticafe_token, 'anticafeToken')
        yield call(loadUserSaga)

    } else {

        if (loginMode === 'login') {
            Toasts.messageToast(error)
        }

        yield put({
            type: errorSagaKey(LOG_IN_SUCCESS),
            payload: { error }
        })
    }

    yield put({ type: AUTH_SUCCESS })
    return !error
}

export function* logout() {

    LocalStorage.clearStorage('anticafeToken')
    LocalStorage.clearStorage('roomToken')
}

export function* waitAuthentication(waitLogIn: boolean, waitLoadUser: boolean) {

    const waitAuthentication: boolean = yield select(waitAuthenticationSelector)

    if (waitAuthentication) {
        infoMessage('Ждем auth')
        yield call(waitSuccess, LOG_IN_SUCCESS)
    }

    if (waitLogIn) {

        const isAuthorized: boolean = yield select(isAuthorizedSelector)

        if (!isAuthorized) {

            const { error } = yield call(waitSuccess, LOG_IN_SUCCESS)

            if (error) {
                return false
            }
        }

        if (waitLoadUser) {

            const isAuthorized: boolean = yield select(isAuthorizedSelector)

            if (!isAuthorized) {
                return false
            }

            const isLoadUser: boolean = yield select(userSelector)

            if (!isLoadUser) {
                yield take(LOAD_USER_SUCCESS)
            }
        }
    }

    return true
}

function* loginAction(): any {

    const vkAuth: iVkAuth = yield call(waitVkAuth)
    if (!vkAuth) return

    vkAuth.appKey = 'web'

    return yield call(Api.POST, 'vk-auth-new', { vkAuth }) 
}

function* checkLoginAction(): any {

    const query = yield select(querySelector)
    const { vk_app_id, api_id, user_id, access_token } = query

    const appKey = getAppKey(+vk_app_id || +api_id)
    let action: any

    switch (appKey) {

        case 'web':
            action = checkLoginWeb
            break

        case 'vk-app':
            action = checkLoginMiniApp
            break

        case 'vk-game':
            action = checkLoginGameApp
            break

    }

    return yield call(action!, query)
}

function* checkLoginWeb(query: any): any {

    const token = yield call(LocalStorage.getObjectFromStorage, 'anticafeToken')

    if (token) {
        return yield call(Api.POST, 'verify-anticafe-token', { token, appKey: 'web' })
    }

    return { error: 'Нет токена' }
}

function* checkLoginMiniApp(query: any): any {

    const { vk_app_id: app_id, vk_user_id: user_id } = query

    yield bridge.send('VKWebAppInit', {})

    if (bridge.isWebView()) {
        yield put(Modals.showRedirectToBrouserModal())
        return { error: 'Открыто в приложение' }
    }

    const tokenResponce: any = yield bridge.send('VKWebAppGetAuthToken', { app_id: +app_id, "scope": "" })
    const { access_token } = tokenResponce

    const vkAuth: iVkAuth = { access_token, user_id: +user_id, appKey: 'vk-app', expires_in: 10000 }
    return yield call(Api.POST, 'vk-auth-new', { vkAuth })
}

function* checkLoginGameApp(query: any): any {

    const { access_token, user_id, viewer_id, platform } = query

    if (platform !== 'web') {
        yield put(Modals.showRedirectToBrouserModal())
        return { error: 'Открыто в приложение' }
    }

    const vkAuth: iVkAuth = { access_token, user_id: +(user_id == 0 ? viewer_id : user_id), appKey: 'vk-app', expires_in: 10000 }
    return yield call(Api.POST, 'vk-auth-new', { vkAuth })
}

function* waitVkAuth() {

    const { delayRace, callback } = yield race({
        delay: delay(180000),
        callback: waitCallback((emit: any) => {
            window['VkAuth'] = (hash: string) => emit(hash)
            window.open(vkAuthUrl, 'Anticafe', vkAuthPopupParams)
        })
    })

    window['VkAuth'] = null

    if (delayRace) {
        alert('VK AUTH DELAY')
        return
    }

    const hash = callback

    return vkHashToObject(hash)
}

function vkHashToObject(hash: string) {
    if (!regexVkHash.test(hash)) {
        errorMessage('Invalid VK Token')
        return
    }

    hash = hash.substring(1, hash.length)
    const [, access_token, , expires_in, , user_id] = hash.split(/\&|\=/)

    return { access_token, expires_in: +expires_in, user_id: +user_id } as iVkAuth
}

function getAppKey(id: number) {

    const webID = vkAppId
    const vkMiniAppID = vkMiniAppKey
    const vkGameAppId = vkGameAppKey

    let appKey: iAppKey

    switch (id) {

        case vkMiniAppID:
            appKey = 'vk-app'
            break;

        case vkGameAppId:
            appKey = 'vk-game'
            break;

        default:
            appKey = 'web'
            break;
    }

    return appKey
}

function* decodeToken(token: string): any {
    if (!token) return
    return yield call(jwt_decode, token)
}