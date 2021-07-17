import React from 'react'
import { iShortRoom } from '../../../../../core/ducks/webrtc-rooms/entity/rooms-entity'

interface iRoomList {
    rooms: iShortRoom[],
    connectToRoom: (room: string) => void
}

export class RoomList extends React.Component<iRoomList> {

    render() {

        const { rooms, connectToRoom } = this.props

        return (

            <>
                Комнаты онлайн:

                {
                    rooms.map(item => <p style={{cursor: 'pointer'}} onClick={() => connectToRoom(item.id)}>{item.name}</p>)
                }
            </>
        )
    }
}

export default RoomList
