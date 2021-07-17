import React from 'react'

import Games from '../../../core/games/games'

import Manual from '../../../games/alias/components/manual'
import image from '../../../style/images/games/crocodile.jpg'
import AddWords from '../../../components/games/common/add-data/add-words'

const Game = Games.getGame('alias')

Game!._gameboard = () => <span >NEEEED ADDDDDDDDDDDDDDDDDDDDDDDDDDD</span>
Game!._manual = { 
    manual: () => <Manual />, 
    previewImage: image,
    addData: () => <AddWords gameKey='alias' />
 }
