import React from 'react'

import Game from '../../../../core/code/games/game'

interface iProps {
    game: Game
    selected: boolean
    selectGame: (game: Game) => void
}

const GameItem: React.FC<iProps> = ({ game, selected, selectGame }) => {

    return (

        <div className={`game-item ${selected ? '' : ' unselected'}`} title={game.gameName} onClick={() => selectGame(game)} style={{ backgroundImage: `url(${game.manual.previewImage})` }}>
            
        </div>
    )
}

export default GameItem