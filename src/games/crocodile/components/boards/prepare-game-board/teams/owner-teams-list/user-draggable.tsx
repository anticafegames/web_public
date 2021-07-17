import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import { iRoomPeer } from '../../../../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import User from '../user'

interface iProps {
    user: iRoomPeer
    index: number
}

const UserDraggable: React.FC<iProps> = ({ user, index }) => {

    return (
        <Draggable key={user.id} draggableId={user.id} index={index}>
            {(provided, snapshot) => (
                <User divProps={{ ref:provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps }} user={user} />
            )}
        </Draggable>
    )

}

export default UserDraggable