import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { roomsSelector, loadRooms, unbindListenRooms } from '../../../../core/ducks/webrtc-rooms'
import { useFilter, roomsFilter } from '../../filter-provider'

import Block from './styled'
import Title from './title'
import RoomList from './room-list'

const Lobby: React.FC = props => {

    const dispatch = useDispatch()
    const rooms = useSelector(roomsSelector)
    const [filter, changeFilter] = useFilter()

    useEffect(() => {
        dispatch(loadRooms())
        return () => { dispatch(unbindListenRooms()) }
    }, [])

    const filteredRooms = roomsFilter(rooms, filter)

    return (

        <Block>
            <Title length={filteredRooms ? filteredRooms.length : 0} />
            <RoomList rooms={filteredRooms} emptyRoomList={!rooms.length} />
        </Block>
    )
}

export default Lobby