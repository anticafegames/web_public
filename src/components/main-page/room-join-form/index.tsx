import React from 'react'
import { useDispatch } from 'react-redux'

import { iShortRoom } from '../../../core/ducks/webrtc-rooms/entity/rooms-entity'
import { connectToRoom, knockOnRoom } from '../../../core/ducks/webrtc-room/action-creaters/connect'
import { iJoinRoomParams } from '../../../core/ducks/webrtc-room/entity/interface'

import Form from './form'

interface iProps {
    room: iShortRoom
    closeModalWindow: () => void
}

const RoomJoinModal: React.FC<iProps> = ({ room, closeModalWindow }) => {

    const dispatch = useDispatch()

    const handleSubmitRoom = (params: Partial<iJoinRoomParams>) => {

        params.roomId = room.id

        dispatch(connectToRoom(params))
        closeModalWindow()
    }

    const knock = () => {
        dispatch(knockOnRoom(room.id))
        closeModalWindow()
    }

    return (
        <div>
            <Form onSubmit={handleSubmitRoom} knockOnRoom={knock} closeModal={closeModalWindow}/>
        </div>
    )
}

export default RoomJoinModal
