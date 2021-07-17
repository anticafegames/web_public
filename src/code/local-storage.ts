import { localstorageKey } from '../core/config/app-config'

export const setObjectToStorage = async (object: any, prefix: string) => {
    await localStorage.setItem(`${localstorageKey}-${prefix}`, JSON.stringify(object))
    return true
}

export const getObjectFromStorage = async (prefix: string) => {
    const object = localStorage.getItem(`${localstorageKey}-${prefix}`)
    return await (object && JSON.parse(object))
}

export const clearStorage = async (prefix: string) => {
    await localStorage.removeItem(`${localstorageKey}-${prefix}`)
    return true
}