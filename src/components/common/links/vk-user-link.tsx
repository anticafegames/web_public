import React from 'react'

import UserImg from '../img/user-img'
import { iRoomPeer } from '../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { iUser } from '../../../core/ducks/authentication/entity/auth-user-entity'
import { vkUserLink } from '../../../core/config/vk-config'

interface iOwnerLinkProps {
    user?: iRoomPeer | iUser
    className?: string
}

export class VkUserLink extends React.Component<iOwnerLinkProps> {

    render() {

        const { user, className, children } = this.props

        if (!user) return null

        return (
            <a className={className || 'user-link'} href={vkUserLink(user.vkId)} target='_blank' onClick={this.onClickLink} >
                <UserImg link={user.profilePhoto} size='user-img-s' className='circle responsive-img user-icon' />
                {children || <span className='nowrap-span'>{user.first_name} {user.last_name}</span>}
            </a>
        )
    }

    onClickLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.stopPropagation()
    }
}

export default VkUserLink
