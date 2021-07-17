import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { teamsSelector } from '../../../../../core/games/crocodile/ducks'
import { IAmOwnerSelector, roomIdSelector } from '../../../../../core/ducks/webrtc-room'
import { startGame } from '..//../../../../core/games/crocodile/ducks'

import Styled from './styled'
import Manual from './manual-tab'
import Settings from './settings'
import OwnerTeams from './teams/owner-teams-list'
import UnownerTeams from './teams/unowner-teams-list'
import Button from '../../../../../components/common/controls/buttons/button'

type iTabs = 'main' | 'manual' | 'settings'

interface iProps {
    closeWindow: () => void
}

const GameBoard: React.FC<iProps> = ({ closeWindow }) => {

    const [tab, changeTab] = useState<iTabs>('main')
    const dispatch = useDispatch()

    const IAmOwner = useSelector(IAmOwnerSelector)
    const roomId = useSelector(roomIdSelector)

    useEffect(() => {

        if(!roomId) {
            closeWindow()
        }

    }, [roomId])

    if (tab === 'manual') {
        return (<Manual toggleManual={() => changeTab('main')} />)
    }

    if (tab === 'settings') {
        return (<Settings closeTab={() => changeTab('main')} />)
    }

    return (
        <>
            <Styled className='modal-content'>
                {IAmOwner ? <OwnerTeams /> : <UnownerTeams/>}
            </Styled>
            <div className='modal-footer'>
                {IAmOwner && <Button onClick={() => dispatch(startGame())}>Начать игру</Button>}
                {IAmOwner && <Button onClick={() => changeTab('settings')}>Параметры</Button>}
                <Button onClick={() => changeTab('manual')}>Правила игры</Button>
            </div>
        </>
    )
}

export default GameBoard