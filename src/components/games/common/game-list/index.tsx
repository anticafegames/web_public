import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import Game from '../../../../core/code/games/game'
import { gameKey } from '../../../../core/ducks/games-common/entity/interface'

import Styled from './styled'
import GameItem from './game-item'
import Scroll from '../../../common/scrollbar/horizontal-scroll'

interface iProps {
    selectedKey: gameKey
    games: Game[]
    selectGame: (game: Game) => void
    title?: string
}

const GameList: React.FC<iProps> = ({ selectedKey, games, selectGame, title }) => {

    return (
        <Styled>

            <div className='title'>
                {title}
            </div>

            <Scroll>
                {
                    games.map(game => <GameItem key={game.gameKey} game={game} selected={game.gameKey === selectedKey} selectGame={selectGame} />)
                }
            </Scroll>

        </Styled>
    )
}

GameList.defaultProps = {
    title: 'Выберите игру:'
}

export default GameList