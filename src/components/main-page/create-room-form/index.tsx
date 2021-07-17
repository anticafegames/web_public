import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { isDeveloperSelector } from '../../../core/ducks/authentication'
import { createRoom } from '../../../core/ducks/webrtc-room/action-creaters/connect'
import { iCreateFormResult, getDefaultFormParams } from '../../../core/ducks/webrtc-room/entity/room-reg-params-entity'

import Form from './form'

interface iProps {
    closeModalWindow: () => void
}

const CreateRoomModal: React.FC<iProps> = ({ closeModalWindow }) => {

    const dispatch = useDispatch()
    const isDeveloper = useSelector(isDeveloperSelector)

    const defaultFormParams = getDefaultFormParams(isDeveloper)

    const handleSubmitRoom = (params: iCreateFormResult) => {
        dispatch(createRoom(params))
        closeModalWindow()
    }

    return (
        <div>
            <Form onSubmit={handleSubmitRoom} closeForm={closeModalWindow} isDeveloper={isDeveloper} defaultParams={defaultFormParams} />
        </div>
    )
}

export default CreateRoomModal
