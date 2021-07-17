import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext } from "react-beautiful-dnd"

import { teamsSelector, addTeamLoadingSelector, changeTeam, addTeam } from '../../../../../../../core/games/crocodile/ducks'
import { canAddTeam } from '../../../../../../../core/games/crocodile/code/prepare'
import { roomUsersCountSelector } from '../../../../../../../core/ducks/webrtc-room'

import Styled from '../styled'
import TransitionList from '../../../../../../../components/common/animation/transition-list'
import Team from './team-item'

const Teams: React.FC = () => {

    const dispatch = useDispatch()

    const teams = useSelector(teamsSelector)
    const usersCount = useSelector(roomUsersCountSelector)

    const animations = [
        { key: 'opacity', defaultValue: { value: 100 }, enterValue: 0, leaveValue: { value: 0 } }
    ]

    return (
        <>
            <div className='block-title header-title'>Выбор команды</div>
            <Styled>
                <div className='team-list'>
                    <TransitionList items={teams} animations={animations} findKey={item => item.name}>

                        {config => (
                            <>
                                {config.map((item, index) => <Team key={item.key} team={item.data} divProps={{ style: { opacity: (item.style.opacity as number) / 100 } }} />)}
                            </>
                        )}

                    </TransitionList>
                </div>
            </Styled>
        </>
    )
}

export default Teams