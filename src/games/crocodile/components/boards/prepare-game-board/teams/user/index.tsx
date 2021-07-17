import React from 'react'

import { iRoomPeer } from '../../../../../../../core/ducks/webrtc-room/entity/room-peer-entity'

interface iProps {
    user: iRoomPeer
    divProps?: any
}

const User: React.FC<iProps> = ({ user, divProps }) => {

    console.log(divProps)

    return (
        <div className='user' {...divProps}>
            {user.first_name}
        </div>
    )
}

User.defaultProps = {
    divProps: {}
}

export default User