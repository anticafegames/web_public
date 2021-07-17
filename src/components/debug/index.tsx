import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { loadSiteInfo, clearSiteInfo } from '../../core/ducks/admin'

interface iProps {

}

const Debug: React.FC<iProps> = () => {

    return (
        <div className='room-list-page'>
dddddddd
            {
               /// connectedRoom ? <Redirect to='/room' /> : <FindRoomblock rooms={rooms} roomsLoading={roomsLoading} roomsLoaded={roomsLoaded} loadRooms={loadRooms} unbindListenRooms={unbindListenRooms} connectToRoom={connectToRoom} />
            }

        </div>
    )

}

export default Debug
