import React, { useState } from 'react'

import { iUser } from '../../../../core/ducks/authentication/entity/auth-user-entity'
import { useWindowParams } from '../../../../code/context/window-params-context'
import { iRoomPeer } from '../../../../core/ducks/webrtc-room/entity/room-peer-entity'

import Styled from '../styled'
import Menu from './menu'
import Video from './video'

interface iProps {
    stream?: MediaStream
    user: iUser | iRoomPeer
    children?: (hover: boolean) => JSX.Element
    classNameContainer?: string
    containerNumber?: number
    containersCount?: number
    styled?: any
}

const MyVideo: React.FC<iProps> = props => {

    const [screenSize] = useWindowParams()
    const [videoElement, setVideoElement] = useState<HTMLVideoElement>()

    const styled = props.styled || Styled

    return React.createElement(styled, { length: props.containersCount, index: props.containerNumber, className: containerClassName(props), screenSize:screenSize },
        <>
            {(props.stream && props.stream.active) ? <Video stream={props.stream} setRef={setVideoElement} /> : undefined}
            <Menu stream={props.stream} user={props.user}>{props.children}</Menu>
        </>
    )
}

MyVideo.defaultProps = {
    containersCount: 0, 
    containerNumber: 0
}

const containerClassName = (props: iProps) => {

    let className = 'video-container'
    const { classNameContainer, containerNumber } = props

    if(classNameContainer) {
        className += ` ${classNameContainer}`
    }

    if(containerNumber) {
        className += ` video-container-${containerNumber}`
    }

    return className
}

export default MyVideo