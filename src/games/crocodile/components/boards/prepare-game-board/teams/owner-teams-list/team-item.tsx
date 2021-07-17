import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import { iTeam } from '../../../../../../../core/games/crocodile/ducks/entity/team-entity'

import User from './user-draggable'
import Icon from '../../../../../../../components/common/materialize/icon'
import ProgressBar from '../../../../../../../components/common/animation/progress-bar-loading'
import { deleteTeam } from '../../../../../../../core/games/crocodile/ducks'

interface iProps {
    team: iTeam
    divProps?: Partial<React.HTMLAttributes<HTMLDivElement>>
}

const Team: React.FC<iProps> = ({ team, divProps }) => {
    
    const dispatch = useDispatch()

    return (
        <Droppable droppableId={team.name} type="teams">
            {(provided, snapshot) => (
                <div className='team' ref={provided.innerRef} {...provided.droppableProps} {...divProps}>

                    <div className='team-name'>
                        <span className='name'>{team.name}</span>
                        <span className='delete-holder' onClick={() => dispatch(deleteTeam(team.name))}>
                            <Icon iconKey='delete' className='more-button hover-scale delete-team-button' />
                        </span>
                    </div>

                    <div className='users'>
                        {team.users.map((item, index) => <User user={item!.user as any} index={index!} />)}
                    </div>

                    <div className='team-loading'>
                        <ProgressBar loading={team.teamloading} />
                    </div>

                </div>
            )}
        </Droppable>
    )
}

export default Team