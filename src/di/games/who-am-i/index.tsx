import React from 'react'

import Games from '../../../core/games/games'
import AddWords from '../../../components/games/common/add-data/add-words'

import Manual from '../../../games/who-am-i/components/manual'
import Gameboard from '../../../games/who-am-i/components'
import showSelectNameModal from '../../../games/who-am-i/code/show-modal-select-name'
import image from '../../../style/images/games/headband.jpg'
import { ModalWindowKeys } from '../../../core/games/who-am-i/modal-windows'

const Game = Games.getGame('whoAmI')

Game!._gameboard = () => <Gameboard />
Game!._manual = { 
    manual: () => <Manual />, 
    previewImage: image,
    addData: () => <AddWords gameKey='whoAmI' />
 }

 Game!.modalWindows.registerModal<ModalWindowKeys>('SelectNameModal', showSelectNameModal)