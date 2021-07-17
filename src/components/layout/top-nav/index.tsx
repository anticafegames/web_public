import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { appKeySelector } from '../../../core/ducks/authentication'

import Styled from './styled'
import Logo from './logo'
import SideNavToggle from './side-nav-toggle-button'
import AuthenticationLinks from './authentication-links'
import ChatButton from './chat-button'
import FullScreenButton from './full-screen-button'

interface iProps {}

const TopNav: React.FC<iProps> = () => {

    const appKey = useSelector(appKeySelector)

    useEffect(() => {

        const [vkAppHeader] = document.getElementsByClassName('vkAppHeader')

        if (vkAppHeader) {
            const div = vkAppHeader as HTMLDivElement

            div.style.top = '9px'
            div.style.backgroundColor = 'none'
        }

    }, [])

    return (
        
        <Styled>

            <div className='top-nav-holder' />

            <nav>
                <div className='nav-wrapper top-nav row'>

                    <SideNavToggle />
                    <Logo />

                    <div className='top-nav-links'>
                        <div className='top-nav-left-links'>
                            
                        </div>

                        <div className='top-nav-right-links'>
                            <FullScreenButton />
                            {appKey === 'web' && <AuthenticationLinks />}
                        </div>
                    </div>
                </div>
            </nav>
        </Styled>
    )
}



export default TopNav