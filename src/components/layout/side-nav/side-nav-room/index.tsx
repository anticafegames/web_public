import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { connectedRoomSelector } from '../../../../core/ducks/webrtc-room'
import { updatePropsSelector } from '../../../../core/ducks/webrtc'
import { leaveFromRoom } from '../../../../core/ducks/webrtc-room/action-creaters/connect'
import { useOpenSideNav } from '../../side-nav-provider'

import SideNavRow from '../side-nav-row'
import UserList from './user-list'
import ShareRoomLink from './share-room-link'

interface iProps {}

const SideNavRoom: React.FC<iProps> = () => {

    const dispatch = useDispatch()
    const connectedRoom = useSelector(connectedRoomSelector)
    const updateProps = useSelector(updatePropsSelector)

    const [open, toggleSideNav] = useOpenSideNav()

    const leave = () => {
        dispatch(leaveFromRoom())
        toggleSideNav()
    }

    if (!connectedRoom) {
        return (
            <div className='side-nav_room-block'>
                <SideNavRow iconKey='group' center ><span className='nowrap-span' >Вы не вошли в комнату</span></SideNavRow>
            </div>
        )
    }

    return (
        <div className='side-nav_room-block'>
            <SideNavRow iconKey='group' center >Комната</SideNavRow>

            <UserList />

            <ShareRoomLink />
            <SideNavRow iconKey='close' center isLink action={leave} title='Покинуть комнату'><span className='nowrap-span'>Покинуть комнату</span></SideNavRow>
        </div>
    )
}

export default SideNavRoom
