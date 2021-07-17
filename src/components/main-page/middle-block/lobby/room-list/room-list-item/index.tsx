import React from 'react'
import { useDispatch } from 'react-redux'

import { iShortRoom } from '../../../../../../core/ducks/webrtc-rooms/entity/rooms-entity'
import { iRoomPeer } from '../../../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { connectToRoom as _connectToRoom } from '../../../../../../core/ducks/webrtc-room/action-creaters/connect'
import Modals from '../../../../../../core/code/modals'

import Styled from './styled'
import Icon from '../../../../../common/materialize/icon'
import UserImg from '../../../../../common/img/user-img'
import Dropdown from '../../../../../common/controls/dropdown-actions'

interface iProps {
    room: iShortRoom
    style: any
}

const RoomListItem: React.FC<iProps> = ({ room, style }) => {

    const dispatch = useDispatch()
    const owner = room.owner as iRoomPeer

    const connectToRoom = () => {

        if (room!.openRoom) {
            dispatch(_connectToRoom({ roomId: room.id }))
        } else {
            dispatch(Modals.showRoomJoinFormPageModal(room))
        }
    }
    console.log(style)
    return (
        <Styled opacity={style.opacity} height={style.height} margin={style.margin} onClick={connectToRoom} >
            <Icon iconKey={room.openRoom ? 'lock_open' : 'lock_outline'} className='close-room' title={room.openRoom ? 'Открытая комната' : 'Закрытая комната'} />
            {owner && <UserImg link={owner.profilePhoto} size='user-img-s' title={`${owner.first_name} ${owner.last_name}`} />}
            <div className='owner-name-block flex-grow'>
                {owner && <span className='owner-name'>{owner.first_name}</span>}
                <span className='users-length'>{room.usersLength} из {room.maxUsers}</span>
            </div>
            <Dropdown actions={[
                {
                    action: connectToRoom,
                    text: 'Войти в комнату'
                }
            ]}>
                <Icon iconKey='more_vert' className='more-button hover-scale' />
            </Dropdown>
        </Styled>
    )
}

export default RoomListItem