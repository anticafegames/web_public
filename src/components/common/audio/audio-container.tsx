import React from 'react'
import { useSelector } from 'react-redux'
import { localStreamSelector, peerSelector, updatePropsSelector } from '../../../core/ducks/webrtc'

import Audio from './audio'

interface iProps {
    userId: string
    itIsMe: boolean
}

const AudioContainer: React.FC<iProps> = ({ userId, itIsMe }) => {

    useSelector(updatePropsSelector)

    let stream: MediaStream = useSelector(localStreamSelector)!
    const connections = useSelector(peerSelector(userId))

    if(!itIsMe) {
        stream = (connections && connections.track)!
    }
    
    return (
        <Audio stream={stream} />
    )
}

export default AudioContainer