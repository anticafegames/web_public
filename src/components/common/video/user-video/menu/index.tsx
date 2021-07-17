import React, { useState } from 'react'
import { deviceSettingsMode } from '../../../../../core/ducks/webrtc-devices'
import { iRoomPeer } from '../../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { isMuted as _isMuted } from '../../../../../core/code/webrtc/devices'

import UserIcon from './user-icon'
import VolumeButton from './volume-button'


interface iProps {
    videoElement: HTMLVideoElement
    stream?: MediaStream
    roomPeer: iRoomPeer
    children?: (hover: boolean) => JSX.Element
}

const VideoMenu: React.FC<iProps> = ({ videoElement, stream, roomPeer, children }) => {

    const [isHover, hover] = useState(false)

    const toggleHover = (event: React.MouseEvent) => hover(event.type === 'mouseenter')
    const isMuted = _isMuted(stream)

    return (
        <div className='video-hover-menu-holder' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>

            {!isHover &&
                <div className='video-hover-menu unhover'>
                    <div className='video-hover-menu-header'>
                        <div className='menu-header-icon'>
                            {isMuted && <UserIcon user={roomPeer} isMuted={isMuted} />}
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
                            <UserIcon user={roomPeer} isMuted={isMuted} />
                        </div>
                    </div>
                    <div className='video-hover-menu-bottom'>
                        <VolumeButton videoElement={videoElement} user={roomPeer} isMuted={isMuted} />
                    </div>

                    {
                        children && children(isHover)
                    }

                </div>}

        </div>
    )
}

export default VideoMenu