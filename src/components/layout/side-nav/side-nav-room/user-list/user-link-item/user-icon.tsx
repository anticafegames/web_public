import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { iRoom } from '../../../../../../core/ducks/webrtc-room/entity/room-entity'
import { iRoomPeer } from '../../../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { ownerActionMode } from '../../../../../../core/ducks/webrtc-room/action-creaters/owner-actions'
import { iPeersConnection } from '../../../../../../core/ducks/webrtc/entity/peer-connection-entity'
import { deviceSettingsMode, deviceSettingsAction } from '../../../../../../core/ducks/webrtc-devices'
import { isMuted as _isMuted } from '../../../../../../core/code/webrtc/devices'

import UserImg from '../../../../../common/img/user-img'
import DropdownList, { iDropdownItem } from '../../../side-nav-dropdown-row/side-nav-dropdown-list'
import Icon from '../../../../../common/materialize/icon'
import DisconnectedIcon from './disconnected-icon'
import Styled from '../user-icon-styled'

interface iProps {
    peers: iPeersConnection[]
    user: iRoomPeer
    room: iRoom
}

const UserIcon: React.FC<iProps> = ({ user, peers, room }) => {

    const dispatch = useDispatch()

    const [isHover, hover] = useState(false)

    const isMuted = () => {

        const peer = peers.find(item => item.userId === user.id)

        if(!peer) {
            return false
        }

        return _isMuted(peer!.track)
    }

    const muted = isMuted()

    const toggleHover = (event: React.MouseEvent) => hover(event.type === 'mouseenter')
    const onClickVolume = () => dispatch(deviceSettingsAction('volume-off', { off: !muted, userId: user.id }))
    const isDisconnected = () => !peers.some(item => item.userId === user.id)

    const isOwner = room.ownerId === user.id
    const disconnected = isDisconnected()
    
    return (
        <div className='side-nav-row_icon' onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={onClickVolume} >
            <UserImg link={user.profilePhoto} size='user-img-s' className='circle responsive-img user-icon' styled={Styled} >
                {!disconnected && !isHover && muted && <Icon iconKey='volume_off' className='room-user-icon mic' title='Включить звук' />}
                {!disconnected && isHover && <Icon iconKey={muted ? 'volume_up' : 'volume_off'} className='room-user-icon mic' title={`${muted ? 'Включить' : 'Выключить'} звук`} />}
                {disconnected && <DisconnectedIcon />}
                {isOwner && <Icon iconKey='star' className='room-user-icon owner' title='Владелец комнаты' />}
            </UserImg>
        </div>
    )
}

export default UserIcon
