import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { iUser } from '../../../../../../core/ducks/authentication/entity/auth-user-entity'
import Icon from '../../../../../common/materialize/icon'
import { deviceSettingsAction } from '../../../../../../core/ducks/webrtc-devices'
import DropdownList, { iDropdownItem } from '../../../side-nav-dropdown-row/side-nav-dropdown-list'
import { useOpenSideNav } from '../../../../side-nav-provider'

import MyIcon from './my-icon'
import { isMuted } from '../../../../../../core/code/webrtc/devices'

interface iProps {
    localStream: MediaStream
    user: iUser
    isOwner: boolean
}

const UserLinkItem: React.FC<iProps> = ({ user, isOwner, localStream }) => {

    const [isOpenDrowdown, openDrowdown] = useState(false)
    const dispatch = useDispatch()

    const [openSideNav] = useOpenSideNav()

    useEffect(() => {
        if (isOpenDrowdown && !openSideNav) {
            openDrowdown(false)
        }
    }, [isOpenDrowdown, openSideNav])

    const dropdownActions = () => {

        const muted = isMuted(localStream)

        let dropdownItems: iDropdownItem[] = [
            {
                action: () => {
                    dispatch(deviceSettingsAction('mic-off', { off: !muted }))
                    openDrowdown(false)
                },
                text: `${muted ? 'Включить' : 'Выключить'} микрофон`
            }
        ]

        return dropdownItems
    }

    return (

        <>

            <div className='side-nav-row link'>

                <MyIcon user={user} isOwner={isOwner} localStream={localStream} />

                <div className='side-nav-row_content center' onClick={() => openDrowdown(!isOpenDrowdown)}>
                    <span className='nowrap-span'>Вы</span>
                    {dropdownActions.length ? <Icon iconKey='arrow_drop_down' /> : null}
                </div>

            </div>

            {<DropdownList dropdownItems={isOpenDrowdown ? dropdownActions() : []} />}

        </>
    )
}

export default UserLinkItem
