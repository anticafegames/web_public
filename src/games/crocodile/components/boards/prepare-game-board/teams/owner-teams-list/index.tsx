import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext } from "react-beautiful-dnd"

import { teamsSelector, addTeamLoadingSelector, changeTeam, addTeam } from '../../../../../../../core/games/crocodile/ducks'
import { canAddTeam } from '../../../../../../../core/games/crocodile/code/prepare'
import { roomUsersCountSelector } from '../../../../../../../core/ducks/webrtc-room'

import Styled from '../styled'
import TransitionList from '../../../../../../../components/common/animation/transition-list'
import Team from './team-item'
import Button from '../../../../../../../components/common/controls/buttons/button'
import LoadingButton from '../../../../../../../components/common/controls/buttons/loading-button'

const Teams: React.FC = () => {

    const dispatch = useDispatch()

    const teams = useSelector(teamsSelector)
    const usersCount = useSelector(roomUsersCountSelector)
    const addTeamLoading = useSelector(addTeamLoadingSelector)

    const showAddTeamButton = useMemo(() => canAddTeam(teams.length, usersCount), [teams.length])

    const onDragEnd = (data: any) => {

        if (!data || !data.source || !data.destination) return

        const userId = data.draggableId
        const from = data.source.droppableId
        const to = data.destination.droppableId
        const index = data.destination.index

        dispatch(changeTeam(userId, from, to, index))
    }

    const animations = [
        { key: 'opacity', defaultValue: { value: 100 }, enterValue: 0, leaveValue: { value: 0 } }
    ]

    return (
        <>
            <div className='block-title header-title'>Выбор команды</div>
            <Styled>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className='team-list'>

                        <TransitionList items={teams} animations={animations} findKey={item => item.name}>

                            {config => (
                                <>
                                    {config.map((item, index) => <Team key={item.key} team={item.data} divProps={{ style: { opacity: (item.style.opacity as number) / 100 } }} />)}
                                </>
                            )}

                        </TransitionList>
                    </div>
                </DragDropContext>
                <div className='add-team'>
                    {showAddTeamButton && <LoadingButton loading={addTeamLoading} onClick={() => dispatch(addTeam())} >Добавить команду</LoadingButton>}
                </div>
            </Styled>
        </>
    )
}

export default Teams