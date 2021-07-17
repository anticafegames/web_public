import React from 'react'

import { showElement } from '../../core/ducks/modal'

import CreateRoomForm from '../../components/main-page/create-room-form'
import Styled from '../../components/main-page/create-room-form/styled'

export default () => {
    return showElement(close => <CreateRoomForm closeModalWindow={close} />, { className: 'create-room-modal', styled: Styled })
}