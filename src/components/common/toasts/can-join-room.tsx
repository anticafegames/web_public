import React from 'react'
import { useDispatch } from 'react-redux'

import { iRoomPeer } from '../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { knockOnRoomResponce } from '../../../core/ducks/webrtc-room/action-creaters/owner-actions'

import VKUserLink from '../links/vk-user-link'

interface iProps {
    user: iRoomPeer
    knockToken: string
}

const ToastCanJoinRoom: React.FC<iProps> = ({ user, knockToken }) => {

    const dispatch = useDispatch()

    return (
        <div className='toast-can-join-room'>
            <div className='message-block'>
                <VKUserLink user={user} >
                    <span >{user.first_name} {user.last_name} хочет подключиться к комнате</span>
                </VKUserLink>
            </div>

            <div className='buttons-block'>
                <span className='btn toast-action' onClick={() => dispatch(knockOnRoomResponce(user.id, knockToken))}>Принять</span>
                <span className='btn toast-action'>Закрыть</span>
            </div>
        </div>
    )
}

export default ToastCanJoinRoom
