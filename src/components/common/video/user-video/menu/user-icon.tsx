import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { iRoomPeer } from '../../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { deviceSettingsAction } from '../../../../../core/ducks/webrtc-devices'

import StyledIcon from '../../../../layout/side-nav/side-nav-room/user-list/user-icon-styled'
import UserImg from '../../../img/user-img'
import Icon from '../../../materialize/icon'

interface iProps {
    isMuted: boolean
    user: iRoomPeer
}

const UserIcon: React.FC<iProps> = ({ user, isMuted }) => {

    const [isHover, hover] = useState(false)
    const dispatch = useDispatch()

    const onClickVolume = () => dispatch(deviceSettingsAction('volume-off', { off: !isMuted, userId: user.id }))
    const toggleHover = (event: React.MouseEvent) => hover(event.type === 'mouseenter')

    return (
        <div className='side-nav-row_icon' onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={onClickVolume} >
            <UserImg link={user.profilePhoto} size='user-img-s' className='circle responsive-img user-icon' styled={StyledIcon} >
                {!isHover && isMuted && <Icon iconKey='volume_off' className='room-user-icon mic' title='Включить звук' />}
                {isHover && <Icon iconKey={isMuted ? 'volume_up' : 'volume_off'} className='room-user-icon mic' title={`${isMuted ? 'Включить' : 'Выключить'} звук`} />}
            </UserImg>
        </div>
    )
}

export default UserIcon
