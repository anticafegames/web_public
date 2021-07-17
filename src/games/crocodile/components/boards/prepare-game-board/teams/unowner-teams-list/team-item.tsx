import React from 'react'
import { spring } from 'react-motion'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import { iTeam } from '../../../../../../../core/games/crocodile/ducks/entity/team-entity'

import TransitionList from '../../../../../../../components/common/animation/transition-list'
import User from '../user'

interface iProps {
    team: iTeam
    divProps?: Partial<React.HTMLAttributes<HTMLDivElement>>
}

const Team: React.FC<iProps> = ({ team, divProps }) => {

    const animations = [
        { key: 'height', defaultValue: { value: 45, config: { stiffness: 100, damping: 20 } }, enterValue: 0, leaveValue: { value: 0, config: { stiffness: 300, damping: 50 } } },
        { key: 'opacity', defaultValue: { value: 100, config: { stiffness: 100, damping: 20 } }, enterValue: 0, leaveValue: { value: 0 } },
        { key: 'margin', defaultValue: 15, enterValue: 15, leaveValue: { value: 0, config: { stiffness: 300, damping: 50 } } }
    ]

    return (

        <div className='team' {...divProps} >

            <div className='team-name'>
                {
                    team.name
                }
            </div>

            <div className='users'>
                <TransitionList items={team.users as any} animations={animations} >

                    {config => (
                        <>
                            {config.map((item, index) => <User key={item.key} user={item.data.user as any} divProps={{ style: { ...item.style, opacity: (item.style.opacity as number) / 100 } }} />)}
                        </>
                    )}

                </TransitionList>
            </div>

        </div>
    )
}

export default Team