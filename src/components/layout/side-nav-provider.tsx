import React, { createContext, useState, useContext } from 'react'

export interface iValueContext {
    sideNavIsOpen: boolean
    toggleSideNav?: () => void
}

const Context = createContext<iValueContext>({ sideNavIsOpen: false })

export const OpenSideNavProvider: React.FC = ({ children }) => {

    const [sideNavIsOpen, changeSideNav] = useState(false)
    const toggleSideNav = () => changeSideNav(!sideNavIsOpen)

    return <Context.Provider value={{ sideNavIsOpen, toggleSideNav }}>{children}</Context.Provider>
}

export const useOpenSideNav = () => {
    const value = useContext<iValueContext>(Context)
    return [value.sideNavIsOpen, value.toggleSideNav] as [boolean, () => void]
}