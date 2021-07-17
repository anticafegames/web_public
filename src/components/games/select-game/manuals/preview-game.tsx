import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { prepareGame } from '../../../../core/ducks/games-common'
import { gameKey } from '../../../../core/ducks/games-common/entity/interface'
import Modals from '../../../../core/code/modals'

import Game from '../../../../core/code/games/game'
import Games from '../../../../core/games/games'

import Styled from './styled'
import GameList from '../../common/game-list'
import Manual from './manual'
import Scroll from '../../../common/scrollbar/react-custom-scrollbars'

interface iProps {
    defaultGameKey: gameKey
    closeModal: () => void
}

const PreviewGameModal: React.FC<iProps> = ({ defaultGameKey, closeModal }) => {

    const games = Games.games

    const dispatch = useDispatch()
    const [selectedGame, selectGame] = useState<Game>(games.find(game => game.gameKey === defaultGameKey)!)

    const createRoom = () => {
        closeModal()
        setTimeout(() => dispatch(Modals.showCreateRoomFormPageModal()), 300)
    }

    return (
        <>
            <Styled className='modal-content'>
                <Scroll height='100%'>
                    <GameList title='Игры:' selectedKey={selectedGame.gameKey} games={games} selectGame={selectGame} />
                    <Manual selectedGame={selectedGame} />
                </Scroll>
            </Styled>
            <div className='modal-footer'>
                <button className='btn btn-common log-btn' onClick={createRoom} >Создать комнату</button>
                <span className='btn btn-common log-btn' onClick={closeModal}>Закрыть</span>
            </div>
        </>
    )
}

export default PreviewGameModal
