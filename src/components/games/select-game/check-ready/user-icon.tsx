import React from 'react'

import { iUser } from '../../../../core/ducks/authentication/entity/auth-user-entity'
import { iRoomPeer } from '../../../../core/ducks/webrtc-room/entity/room-peer-entity'

import UserImg from '../../../common/img/user-img'
import Icon from '../../../common/materialize/icon'

interface iCheckReadyProps {
    profilePhoto: string
    title: string
    userIsReady: boolean
}

export class UserIcon extends React.Component<iCheckReadyProps> {

    render() {

        const { profilePhoto, title, userIsReady } = this.props

        return (
            <UserImg link={profilePhoto} size='user-img-s' className='circle responsive-img user-icon' title={title} >
                {userIsReady && <Icon iconKey='check' className='room-user-icon check' title='Готов играть' />}
            </UserImg>
        )
    }
}

export default UserIcon
