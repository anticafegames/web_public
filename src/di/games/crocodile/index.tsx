import React from 'react'

import Games from '../../../core/games/games'

import GameBoard from '../../../games/crocodile/components'
import Manual from '../../../games/crocodile/components/manual'
import showModalPrepareGame from '../../../games/crocodile/code/show-modal-prepare-game'
import image from '../../../style/images/games/crocodile.jpg'
import AddWordsPack from '../../../components/games/common/add-data/add-words-pack'
import { ModalWindowKeys } from '../../../core/games/crocodile/modal-windows'

const Game = Games.getGame('crocodile')

Game!._gameboard = () => <GameBoard />
Game!._manual = { 
    manual: () => <Manual />, 
    previewImage: image,
    addData: () => <AddWordsPack gameKey='crocodile' />
}

Game!.modalWindows.registerModal<ModalWindowKeys>('PrepareGame', showModalPrepareGame)
