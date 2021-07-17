import { all } from 'redux-saga/effects'

import { saga as WindowSettings } from '../core/ducks/window-settings'
import { saga as AuthenticationSaga } from '../core/ducks/authentication'
import { saga as SocketSaga } from '../core/ducks/socket'
import { saga as WebRTCSaga } from '../core/ducks/webrtc'
import { saga as WebRTCRoomSaga } from '../core/ducks/webrtc-room'
import { saga as WebRTCRoomsSaga } from '../core/ducks/webrtc-rooms'
import { saga as WebRTCMessageSaga } from '../core/ducks/webrtc-message'
import { saga as WebRTCDevicesSaga } from '../core/ducks/webrtc-devices'
import { saga as UserSaga } from '../core/ducks/user'
import { saga as PreloaderSaga } from '../core/ducks/global-preloader'
import { saga as AdminSaga } from '../core/ducks/admin'

import { saga as GameCommonSaga } from '../core/ducks/games-common'
import { saga as GameAddDataSaga } from '../core/ducks/games-add-data' 

export default function* () {
  yield all([
    PreloaderSaga(),
    WindowSettings(),
    AuthenticationSaga(),
    SocketSaga(),
    WebRTCSaga(),
    WebRTCRoomSaga(),
    WebRTCRoomsSaga(),
    WebRTCMessageSaga(),
    WebRTCDevicesSaga(),
    UserSaga(),
    AdminSaga(),

    GameCommonSaga(),
    GameAddDataSaga()
  ])
}
