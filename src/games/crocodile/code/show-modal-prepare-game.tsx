import React from 'react'

import { showElement } from '../../../core/ducks/modal'

import GameBoard from '../components/boards/prepare-game-board'

export default () => {
    return showElement(close => <GameBoard closeWindow={close} />, { className: 'crocodile-game-board', canCloseOnOverlay: false })
}