import React from 'react'

import { useOpenSideNav } from './side-nav-provider'

const Content: React.FC = ({ children }) => {

    const [sideNavIsOpen, openSideNav] = useOpenSideNav()

    const onClickContect = (event: React.MouseEvent) => {
        if (sideNavIsOpen) {
            openSideNav()
        }
    }

    return (
        <div className='layout-content' onClick={onClickContect}>
            {children}
        </div>
    )
}

export default Content