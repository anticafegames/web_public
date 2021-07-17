import React, { useState } from 'react'

import { iRoom } from '../../../../core/ducks/webrtc-room/entity/room-entity'
import { iRoomPeer } from '../../../../core/ducks/webrtc-room/entity/room-peer-entity'
import { iPeersConnection } from '../../../../core/ducks/webrtc/entity/peer-connection-entity'
import { useWindowParams } from '../../../../code/context/window-params-context'

import Styled from '../styled'
import Menu from './menu'
import Video from './video'

interface iProps {
    room?: iRoom
    roomPeer?: iRoomPeer
    peer: iPeersConnection
    children?: (hover: boolean) => JSX.Element
    classNameContainer?: string
    key: string
    containerNumber?: number
    containersCount?: number
    styled?: any
}

const UserVideo: React.FC<iProps> = props => {

    const roomPeer = getRoomPeer(props)
    const [screenSize] = useWindowParams()

    const [videoElement, setVideoElement] = useState<HTMLVideoElement>()

    if (!props.peer) {
        return null
    }

    const { track: stream } = props.peer
    const styled = props.styled || Styled

    return React.createElement(styled, { length: props.containersCount, index: props.containerNumber, className: containerClassName(props), screenSize:screenSize },
        <>
            {(stream && stream.active) ? <Video key={props.key} stream={stream} setRef={setVideoElement} /> : undefined}
            {videoElement && roomPeer && <Menu stream={stream} roomPeer={roomPeer} videoElement={videoElement}>{props.children}</Menu>}
        </>
    )
}

UserVideo.defaultProps = {
    containersCount: 0, 
    containerNumber: 0
}

const getRoomPeer = (props: iProps) => {

    const { room, roomPeer } = props

    if (roomPeer) {
        return roomPeer
    }

    const { userId } = props.peer

    return room && (room.users as iRoomPeer[]).find(user => user.id === userId)
}

const containerClassName = (props: iProps) => {

    let className = 'video-container'
    const { classNameContainer, containerNumber } = props

    if (classNameContainer) {
        className += ` ${classNameContainer}`
    }

    if (containerNumber) {
        className += ` video-container-${containerNumber}`
    }

    return className
}

export default UserVideo