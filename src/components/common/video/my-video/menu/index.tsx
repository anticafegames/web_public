import React, { useState } from 'react'
import { deviceSettingsMode } from '../../../../../core/ducks/webrtc-devices'
import { iUser } from '../../../../../core/ducks/authentication/entity/auth-user-entity'
import { isMuted as _isMuted } from '../../../../../core/code/webrtc/devices'

import MyIcon from '../../../../layout/side-nav/side-nav-room/user-list/my-user-link/my-icon'
import MicButton from './mic-button'


interface iProps {
    stream?: MediaStream
    user: iUser
    children?: (hover: boolean) => JSX.Element
}

const VideoMenu: React.FC<iProps> = ({ stream, user, children }) => {

    const [isHover, hover] = useState(false)

    const toggleHover = (event: React.MouseEvent) => hover(event.type === 'mouseenter')
    const isMuted = _isMuted(stream)
    
    return (
        <div className='video-hover-menu-holder' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>

            {!isHover &&
                <div className='video-hover-menu unhover'>
                    <div className='video-hover-menu-header'>
                        <div className='menu-header-icon'>
                            {isMuted && <MyIcon user={user} isOwner={false} localStream={stream!} />}
                        </div>
                    </div>
                    
                    {
                        children && children(isHover)
                    }
                </div>
            }

            {isHover &&
                <div className='video-hover-menu' >
                    <div className='video-hover-menu-header' >
                        <div className='menu-header-icon'>
                            <MyIcon user={user} isOwner={false} localStream={stream!} />
                        </div>
                    </div>
                    <div className='video-hover-menu-bottom'>
                        <MicButton isMuted={isMuted} />
                    </div>

                    {
                        children && children(isHover)
                    }
                </div>}

        </div>
    )
}

export default VideoMenu