import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Game from '../../../core/code/games/game'
import Games from '../../../core/games/games'

import GameList from '../../games/common/game-list'
import Scroll from '../../common/scrollbar/react-custom-scrollbars'

interface iProps {
    closeModal: () => void
}

const AddGameDataSettings: React.FC<iProps> = ({ closeModal }) => {

    const games = Games.games.filter(game => game.manual.addData)

    const dispatch = useDispatch()
    const [selectedGame, selectGame] = useState<Game>(games[0])

    return (
        <>
            <Scroll height='100%'>
                <GameList selectedKey={selectedGame.gameKey} games={games} selectGame={selectGame} />
                {selectedGame.manual.addData!()}
            </Scroll>
        </>
    )
}

export default AddGameDataSettings