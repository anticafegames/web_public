import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { iRoom } from '../../../../../../core/ducks/webrtc-room/entity/room-entity'
import { iRoomPeer } from '../../../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { useOpenSideNav } from '../../../../side-nav-provider'

import DropdownList, { iDropdownItem } from '../../../side-nav-dropdown-row/side-nav-dropdown-list'
import Icon from '../../../../../common/materialize/icon'
import { ownerActionMode, ownerAction } from '../../../../../../core/ducks/webrtc-room/action-creaters/owner-actions'
import { iPeersConnection } from '../../../../../../core/ducks/webrtc/entity/peer-connection-entity'
import { deviceSettingsMode, deviceSettingsAction } from '../../../../../../core/ducks/webrtc-devices'
import { isMuted as _isMuted } from '../../../../../../core/code/webrtc/devices'
import { vkUserLink } from '../../../../../../core/config/vk-config'

import UserIcon from './user-icon'

interface iProps {
    peers: iPeersConnection[]
    user: iRoomPeer
    room: iRoom
}

const UserLinkItem: React.FC<iProps> = ({ user, peers, room }) => {

    const [isOpenDrowdown, openDrowdown] = useState(false)
    const dispatch = useDispatch()

    const [openSideNav] = useOpenSideNav()

    useEffect(() => {
        if (isOpenDrowdown && !openSideNav) {
            openDrowdown(false)
        }
    }, [isOpenDrowdown, openSideNav])

    const toggleDropdown = () => openDrowdown(!isOpenDrowdown)

    const isMuted = () => {

        const peer = peers.find(item => item.userId === user.id)

        if(!peer) {
            return false
        }

        return _isMuted(peer!.track)
    }

    const isOwner = room.isOwner
    const muted = isMuted()

    const dropdownActions = () => {

        let dropdownItems: iDropdownItem[] = [
            {
                action: () => {
                    dispatch(deviceSettingsAction('volume-off', { off: !isMuted, userId: user.id }))
                    toggleDropdown()
                },
                text: `${muted ? 'Включить' : 'Выключить'} звук`
            },
            {
                action: () => {
                    window.open(vkUserLink(user.vkId), '_blank')
                    toggleDropdown()
                },
                text: 'Открыть страницу ВК'
            }
        ]

        if (isOwner) {

            dropdownItems.push(
                {
                    action: () => {
                        dispatch(ownerAction('changeOwner', { userId: user.id }))
                        toggleDropdown()
                    },
                    text: 'Передать владельца'
                },
                {
                    action: () => {
                        dispatch(ownerAction('kick', { userId: user.id }))
                        toggleDropdown()
                    },
                    text: 'Исключить из комнаты' 
                })
        }

        return dropdownItems
    }

    return (
        <>

            <div className='side-nav-row link'>

                <UserIcon user={user} room={room} peers={peers} />

                <div className='side-nav-row_content center' onClick={toggleDropdown} >
                    <span className='nowrap-span' id={user.id} >{user.first_name}</span>
                    {dropdownActions.length ? <Icon iconKey='arrow_drop_down' /> : null}
                </div>

            </div>

            <DropdownList dropdownItems={isOpenDrowdown ? dropdownActions() : []} />

        </>
    )
}

export default UserLinkItem
