import React, { createContext, useState, useContext } from 'react'

type iOrientation = 'landscape' | 'portrait'

export interface iScreenSize {
    width: number
    height: number
    orientation: iOrientation
}

export interface iValueContext {
    screenSize: iScreenSize
}

const defaultScreenSize: iScreenSize = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, orientation: "landscape" }

const Context = createContext<iValueContext>({ screenSize: defaultScreenSize })

export const WindowParamsProvider: React.FC = ({ children }) => {

    const [screenSize, changeSize] = useState(defaultScreenSize)

    window.onresize = () => {

        const width = document.documentElement.clientWidth
        const height = document.documentElement.clientHeight

        const orientation: iOrientation = width / height > 1 ? 'landscape' : 'portrait'

        changeSize({ width, height, orientation })
    }

    return <Context.Provider value={{ screenSize }}>{children}</Context.Provider>
}

export const useWindowParams = () => {
    const value = useContext<iValueContext>(Context)
    return [value.screenSize] as [iScreenSize]
}