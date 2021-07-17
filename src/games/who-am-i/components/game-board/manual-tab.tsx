import React from 'react'
import { connect } from 'react-redux'

import { iGameUser } from '../../../../core/games/who-am-i/ducks/entity/game-user-entity'
import { gameUsersSelector } from '../../../../core/games/who-am-i/ducks'

import Manual from '../manual'

interface iProps {
    toggleManual: () => void
}

const ManualTab: React.FC<iProps> = ({ toggleManual }) => {

    return (
        <>
            <div className='modal-content'>
                <Manual />
            </div>
            <div className='modal-footer'>
                <span className='btn' onClick={toggleManual}>Назад</span>
            </div>
        </>
    )
}

export default ManualTab
