import React, { useState } from 'react'

import ChangeContent from '../../../../common/animation/change-content'
import Game from '../../../../../core/code/games/game'

interface iProps {
    selectedGame: Game
}

const Manual: React.FC<iProps> = ({ selectedGame }) => {

    return (

        <div className='manual' >
            <ChangeContent>
                {{ key: selectedGame.gameKey,  content: selectedGame.manual.manual()}}
            </ChangeContent>
        </div>

    )
}

export default Manual