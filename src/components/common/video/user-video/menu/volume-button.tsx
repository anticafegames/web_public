import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { deviceSettingsAction } from '../../../../../core/ducks/webrtc-devices'
import { isMuted } from '../../../../../core/code/webrtc/devices'
import { iRoomPeer } from '../../../../../core/ducks/webrtc-room/entity/room-peer-entity'

import Icon from '../../../materialize/icon'

interface iProps {
    videoElement: HTMLVideoElement
    user: iRoomPeer
    isMuted: boolean
}

interface iMicButtonState {
    hover: boolean
}

const MicButton: React.FC<iProps> = ({ videoElement, user, isMuted }) => {

    const [isHover, hover] = useState(false)
    const dispatch = useDispatch()

    const onClickMic = () => dispatch(deviceSettingsAction('volume-off', { off: isMuted, userId: user.id }))
    const onChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => videoElement.volume = (+event.target.value) / 100
    const toggleHover = (event: React.MouseEvent) => hover(event.type === 'mouseenter')

    return (
        <div className='volume' >

            <div className='volume-icon' onClick={onClickMic} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >

                {!isHover && <Icon iconKey={isMuted ? 'volume_off' : 'volume_up'} className='room-user-icon mic' title={`${isMuted ? 'Выключить' : 'Включить'} звук`} />}
                {isHover && <Icon iconKey={isMuted ? 'volume_up' : 'volume_off'} className='room-user-icon mic' title={`${isMuted ? 'Включить' : 'Выключить'} звук`} />}

            </div>

            <div className='volume-range'>
                <input type='range' min='0' max='100' defaultValue={videoElement.volume * 100} onChange={onChangeVolume} />
            </div>

        </div>
    )
}

export default MicButton