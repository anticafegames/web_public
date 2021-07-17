import React from 'react'

import { iShortRoom } from '../../../../core/ducks/webrtc-rooms/entity/rooms-entity'

import RoomList from './room-list'
import RoomForm from '../../../common/webrtc/room-connect-form'

interface iFindConnectRoom {
    rooms: iShortRoom[]
    roomsLoading: boolean
    roomsLoaded: boolean
    loadRooms: () => void
    unbindListenRooms: () => void
    connectToRoom: (room: string) => void
}

export class FindConnectRoom extends React.Component<iFindConnectRoom> {

    componentDidMount() {
        this.props.loadRooms()
    }

    componentWillUnmount() {
        this.props.unbindListenRooms()
    }

    render() {

        const { rooms, roomsLoading, connectToRoom } = this.props

        if (roomsLoading) {

            return (
                <p>Loading</p>
            )
        }

        return (

            <>
                <RoomList rooms={rooms} connectToRoom={connectToRoom} />
                <RoomForm onSubmit={this.handleSubmitRoom.bind(this)} />
            </>
        )
    }

    handleSubmitRoom = ({ room }: any) => this.props.connectToRoom(room)
}

export default FindConnectRoom
