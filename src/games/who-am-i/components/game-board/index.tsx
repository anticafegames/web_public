import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { gameUsersSelector, fillNameLoadingSelector, selectName, startGame } from '../../../../core/games/who-am-i/ducks'
import { IAmOwnerSelector, roomIdSelector } from '../../../../core/ducks/webrtc-room'

import Styled from './styled'
import Manual from './manual-tab'
import UserList from './user-list'
import SelectName from './select-name'

interface iProps {
    closeWindow: () => void
}

const GameBoard: React.FC<iProps> = ({ closeWindow }) => {

    const [shownManual, showManual] = useState(false)
    const dispatch = useDispatch()

    const gameUsers = useSelector(gameUsersSelector)
    const fillNameLoading = useSelector(fillNameLoadingSelector)
    const IAmOwner = useSelector(IAmOwnerSelector)
    const roomId = useSelector(roomIdSelector)

    const I = gameUsers.find(user => user.itIsMe)!
    const IMaking = gameUsers.find(user => user.whoMakesUp === I.user!.id)!

    useEffect(() => {

        if(!roomId) {
            closeWindow()
        }

    }, [roomId])

    if (shownManual) {
        return (<Manual toggleManual={() => showManual(!shownManual)} />)
    }

    return (
        <>
            <Styled className='modal-content'>
                <div className='block-title prepare-title'>Подготовка к игре</div>
                <UserList gameUsers={gameUsers} />
                <SelectName IMaking={IMaking}/>
            </Styled>
            <div className='modal-footer'>
                {IAmOwner && <span className='btn' onClick={() => dispatch(startGame())}>Начать игру</span>}
                <span className='btn' onClick={() => showManual(!shownManual)}>Правила игры</span>
            </div>
        </>
    )
}

export default GameBoard