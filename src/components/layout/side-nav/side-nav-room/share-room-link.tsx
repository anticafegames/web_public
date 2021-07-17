import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Toasts from '../../../../core/code/alerts/toast'
import { invaitRoomLink, invaitRoomLinkVKApp } from '../../../../core/config/anticafe-links'
import { roomSelector } from '../../../../core/ducks/webrtc-room'
import { useOpenSideNav } from '../../side-nav-provider'

import DropdownList, { iDropdownItem } from '../side-nav-dropdown-row/side-nav-dropdown-list'
import Icon from '../../../common/materialize/icon'
import SideNavRow from '../side-nav-row'
import { vkShareLink } from '../../../../core/config/vk-config'
import { appKeySelector } from '../../../../core/ducks/authentication'

interface iProps {
}

const ShareRoomLink: React.FC<iProps> = () => {

    const [isOpenDrowdown, openDrowdown] = useState(false)
    const dispatch = useDispatch()

    const room = useSelector(roomSelector)
    const appKey = useSelector(appKeySelector)

    const [openSideNav] = useOpenSideNav()

    useEffect(() => {
        if (openDrowdown && !openSideNav) {
            openDrowdown(false)
        }
    }, [openDrowdown, openSideNav])

    const copyLink = () => {
        const link = invaitRoomLink(room.id)
        navigator.clipboard.writeText(link).then(() => Toasts.messageToast('Ссылка сохранена в буфер обнема'))
    }

    const shareLinkVk = () => {

        let roomLink;

        switch (appKey) {

            case 'vk-app':
                roomLink = invaitRoomLinkVKApp(room.id)
                break

            default:
                roomLink = invaitRoomLink(room.id)
                break
        }

        const vkLink = vkShareLink(roomLink, `Приглашение в комнату ${room.name}`)
        window.open(vkLink, '_blank')
    }

    const toggleDropdown = () => openDrowdown(!isOpenDrowdown)

    const dropdownActions: iDropdownItem[] = [
        {
            action: () => {
                copyLink()
                toggleDropdown()
            },
            text: 'Скопировать ссылку'
        },
        {
            action: () => {
                shareLinkVk()
                toggleDropdown()
            },
            text: 'Поделиться в ВК'
        }
    ]

    return (
        <>
            <SideNavRow iconKey='person_add' center isLink linkAction={shareLinkVk} action={toggleDropdown} title='Пригласить'>
                <span className='nowrap-span'>Пригласить</span>
                <Icon iconKey='arrow_drop_down' />
            </SideNavRow>

            <DropdownList dropdownItems={isOpenDrowdown ? dropdownActions : []} />
        </>
    )
}

export default ShareRoomLink

