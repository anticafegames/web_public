import React from 'react'

import { iRoomPeer } from '../../core/ducks/webrtc-room/entity/room-peer-entity'
import Toasts from '../../core/code/alerts/toast'

import ToastCanJoinRoom from '../../components/common/toasts/can-join-room'

export default (user: iRoomPeer, knockToken: string) => {
    Toasts.elementToast(<ToastCanJoinRoom user={user} knockToken={knockToken} />)
}