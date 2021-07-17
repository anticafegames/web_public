import React from 'react'

import { showElement } from '../../../core/ducks/modal'

import GameBoard from '../components/game-board'

export default () => {
    return showElement(close => <GameBoard closeWindow={close} />, { className: 'who-am-i-game-board', canCloseOnOverlay: false })
}