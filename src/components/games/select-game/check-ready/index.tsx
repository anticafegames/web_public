import React, { } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userSelector } from '../../../../core/ducks/user'
import { iUser } from '../../../../core/ducks/authentication/entity/auth-user-entity'
import { roomSelector } from '../../../../core/ducks/webrtc-room'
import { iRoomPeer } from '../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { readyUsersSelector, iReady, cancelPrepareGame } from '../../../../core/ducks/games-common'

import UserIcon from './user-icon'

interface iCheckReadyProps {
    closeModalWindow: () => void
}

const ChackReadyModal: React.FC<iCheckReadyProps> = (props) => {
    
    const dispatch = useDispatch()

    const user: iUser = useSelector(userSelector) as any
    const room = useSelector(roomSelector)
    const readyUsers = useSelector(readyUsersSelector)

    const roomUsers = room.users as iRoomPeer[]
    const iAmReady = readyUsers.includes(user.id)

    return (
        <div className='modal-content'>

            <div className='users'>

                <UserIcon profilePhoto={user.profilePhoto} title='Вы' userIsReady={iAmReady} />

                {
                    roomUsers.map(roomUser => <UserIcon profilePhoto={roomUser.profilePhoto} title={roomUser.first_name} userIsReady={readyUsers.includes(roomUser.id)} />)
                }

            </div>

            <div className='buttons'>
                {iAmReady ? <span className='btn disabled'>Ждем других игроков</span> : <span className='btn' onClick={() => dispatch(iReady())} >Готов</span>}
                {room.isOwner && <span className='btn' onClick={() => dispatch(cancelPrepareGame())} >Отмена</span>}
            </div>

        </div>
    )
}

export default ChackReadyModal
