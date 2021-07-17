import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { iRoom } from '../../../../../core/ducks/webrtc-room/entity/room-entity'
import { iUser } from '../../../../../core/ducks/authentication/entity/auth-user-entity'
import { iPeersConnection } from '../../../../../core/ducks/webrtc/entity/peer-connection-entity'
import { roomSelector } from '../../../../../core/ducks/webrtc-room'
import { userSelector } from '../../../../../core/ducks/user'
import { localStreamSelector, peersSelector, updatePropsSelector } from '../../../../../core/ducks/webrtc'
import { leaveFromRoom } from '../../../../../core/ducks/webrtc-room/action-creaters/connect'
import { ownerAction, ownerActionMode } from '../../../../../core/ducks/webrtc-room/action-creaters/owner-actions'
import { deviceSettingsMode, deviceSettingsAction } from '../../../../../core/ducks/webrtc-devices'

import SideNavRow from '../../side-nav-row'
import MyUserLink from './my-user-link'
import UserLinkItem from './user-link-item'

interface iProps {}

const UserLinkList: React.FC<iProps> = () => {

    const dispatch = useDispatch()

    const user = useSelector(userSelector) as any
    const room = useSelector(roomSelector) 
    const localStream = useSelector(localStreamSelector) as any
    const peers = useSelector(peersSelector)
    const updateProps = useSelector(updatePropsSelector)

    return (
        <div className='user-link-list'>

            <MyUserLink user={user} isOwner={room.isOwner} localStream={localStream} />

            {
                (room.users as iUser[]).map(user => <UserLinkItem user={user!} room={room} peers={peers} />)
            }

        </div>
    )
}

export default UserLinkList
