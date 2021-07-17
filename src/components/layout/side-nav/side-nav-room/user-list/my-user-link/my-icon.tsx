import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { isMuted } from '../../../../../../core/code/webrtc/devices'
import { iUser } from '../../../../../../core/ducks/authentication/entity/auth-user-entity'
import UserImg from '../../../../../common/img/user-img'
import Icon from '../../../../../common/materialize/icon'
import { deviceSettingsAction } from '../../../../../../core/ducks/webrtc-devices'

import Styled from '../user-icon-styled'

interface iProps {
    localStream: MediaStream
    user: iUser
    isOwner: boolean
}

const MyIcon: React.FC<iProps> = ({ user, isOwner, localStream }) => {

    const dispatch = useDispatch()

    const [isHover, hover] = useState(false)
    const muted = isMuted(localStream)

    const toggleHover = (event: React.MouseEvent) => hover(event.type === 'mouseenter')
    const onClickMic = () => dispatch(deviceSettingsAction('mic-off', { off: !muted }))

    if(!user) return null

    return (
        <div className='side-nav-row_icon' onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={onClickMic} >
            <UserImg link={user.profilePhoto} size='user-img-s' className='circle responsive-img user-icon' styled={Styled} >
                {!isHover && muted && <Icon iconKey='mic_off' className='room-user-icon mic' title='Включить микрофон' />}
                {isHover && <Icon iconKey={muted ? 'mic' : 'mic_off'} className='room-user-icon mic' title={`${muted ? 'Включить' : 'Выключить'} микрофон`} />}
                {isOwner && <Icon iconKey='star' className='room-user-icon owner' title='Владелец комнаты' />}
            </UserImg>
        </div>
    )
}

export default MyIcon
