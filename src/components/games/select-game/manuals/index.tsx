import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { prepareGame } from '../../../../core/ducks/games-common'

import Game from '../../../../core/code/games/game'
import Games from '../../../../core/games/games'

import Styled from './styled'
import GameList from '../../common/game-list'
import Manual from './manual'
import Scroll from '../../../common/scrollbar/react-custom-scrollbars'

interface iProps {
    closeModal: () => void
}

const SelectGameModal: React.FC<iProps> = ({ closeModal }) => {

    const games = Games.games

    const dispatch = useDispatch()
    const [selectedGame, selectGame] = useState<Game>(games[0])

    const onClickStartGame = () => {
        closeModal()
        dispatch(prepareGame(selectedGame.gameKey))
    }

    return (
        <>
            <Styled className='modal-content'>
                <Scroll height='100%'>
                    <GameList selectedKey={selectedGame.gameKey} games={games} selectGame={selectGame} />
                    <Manual selectedGame={selectedGame} />
                </Scroll>
            </Styled>
            <div className='modal-footer'>
                <button className='btn btn-common log-btn' onClick={onClickStartGame} >Начать игру</button>
                <span className='btn btn-common log-btn' onClick={closeModal}>Закрыть</span>
            </div>
        </>
    )
}

export default SelectGameModal
