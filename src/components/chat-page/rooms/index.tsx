import React from 'react'
import { connect } from 'react-redux'

import { iShortRoom } from '../../../core/ducks/webrtc-rooms/entity/rooms-entity'

import ConnextedRoom from './connected-room'
import FindConnectRoom from './find-connect-room'

interface iRoomsProps {
    roomId?: string,
    rooms: iShortRoom[],
    roomsLoading: boolean,
    roomsLoaded: boolean,
    loadRooms: () => void,
    unbindListenRooms: () => void
    connectToRoom: (room: string) => void,
    leaveFromRoom: () => void
}

export class Rooms extends React.Component<iRoomsProps> {

    render() {

        const { roomId, rooms, roomsLoading, roomsLoaded, loadRooms, unbindListenRooms, connectToRoom, leaveFromRoom } = this.props

        return (

            <>
            
            {
                roomId ? <ConnextedRoom roomId={roomId} leaveFromRoom={leaveFromRoom} /> : <FindConnectRoom rooms={rooms} roomsLoading={roomsLoading} roomsLoaded={roomsLoaded} loadRooms={loadRooms} unbindListenRooms={unbindListenRooms} connectToRoom={connectToRoom} />
            }

            </>
        )
    }
}

export default Rooms
