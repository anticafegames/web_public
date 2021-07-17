import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { deviceSettingsMode, deviceSettingsAction } from '../../../../../core/ducks/webrtc-devices'
import { isMuted } from '../../../../../core/code/webrtc/devices'

import Icon from '../../../materialize/icon'


interface iProps {
    isMuted: boolean
}

interface iMicButtonState {
    hover: boolean
}

const MicButton: React.FC<iProps> = ({ isMuted }) => {

    const [isHover, hover] = useState(false)
    const dispatch = useDispatch()

    const onClickMic = () => dispatch(deviceSettingsAction('mic-off', { off: !isMuted }))
    const toggleHover = (event: React.MouseEvent) => hover(event.type === 'mouseenter')

    return (
        <div className='mic-icon' onClick={onClickMic} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
            {!isHover && <Icon iconKey={isMuted ? 'mic_off' : 'mic'} className='room-user-icon mic' title={`${isMuted ? 'Выключить' : 'Включить'} микрофон`} />}
            {isHover && <Icon iconKey={isMuted ? 'mic' : 'mic_off'} className='room-user-icon mic' title={`${isMuted ? 'Включить' : 'Выключить'} микрофон`} />}
        </div>
    )
}

export default MicButton