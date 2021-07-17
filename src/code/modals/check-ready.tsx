import React from 'react'

import { showElement } from '../../core/ducks/modal'

import Styled from '../../components/games/select-game/check-ready/styled'
import CheckReadyModal from '../../components/games/select-game/check-ready'

export default () => {
    return showElement(close => <CheckReadyModal closeModalWindow={close} />, { styled: Styled, className: 'check-ready-modal', canCloseOnOverlay: false, withFooter: false })
}