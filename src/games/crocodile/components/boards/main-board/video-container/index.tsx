import React from 'react'
import { useSelector } from 'react-redux'

import { iPeersConnection } from '../../../../../../core/ducks/webrtc/entity/peer-connection-entity'
import { iGameUser } from '../../../../../../core/games/crocodile/ducks/entity/game-user-entity'
import { peerSelector, localStreamSelector, updatePropsSelector } from '../../../../../../core/ducks/webrtc'

import MyVideo from '../../../../../../components/common/video/my-video'
import UserVideo from '../../../../../../components/common/video/user-video'

interface iProps {
    gameUser: iGameUser
    index?: number
    usersCount?: number
}

const VideoContainer: React.FC<iProps> = ({ gameUser, index, usersCount }) => {

    useSelector(updatePropsSelector)

    const localStream = useSelector(localStreamSelector)
    const userStream = useSelector(peerSelector(gameUser.userId))

    const stream: any = gameUser.itIsMe ? localStream : userStream

        if (gameUser.itIsMe) {

            return (
                <MyVideo stream={stream} user={gameUser.user as any} containerNumber={index} containersCount={usersCount} />
            )
        }

        return (
            <UserVideo key={gameUser.user!.id} roomPeer={gameUser.user as any} peer={stream as iPeersConnection} containerNumber={index} containersCount={usersCount} />
        )
}

export default VideoContainer