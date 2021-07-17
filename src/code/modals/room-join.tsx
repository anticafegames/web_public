import React from 'react'

import { showElement } from '../../core/ducks/modal'
import { iShortRoom } from '../../core/ducks/webrtc-rooms/entity/rooms-entity'

import RoomJoinFormPage from '../../components/main-page/room-join-form'
import Styled from '../../components/main-page/room-join-form/styled'

export default (room: iShortRoom) => {
    return showElement(close => <RoomJoinFormPage closeModalWindow={close} room={room!} />, { className:  'room-join-modal', styled: Styled })
}