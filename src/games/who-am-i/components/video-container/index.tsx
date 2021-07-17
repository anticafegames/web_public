import React from 'react'

import { iPeersConnection } from '../../../../core/ducks/webrtc/entity/peer-connection-entity'
import { iGameUser } from '../../../../core/games/who-am-i/ducks/entity/game-user-entity'

import Styled from './video-styled'
import MyVideo from '../../../../components/common/video/my-video'
import UserVideo from '../../../../components/common/video/user-video'
import GameInfoContainer from './game-info'

interface iProps {
    peers: iPeersConnection[]
    localStream: MediaStream
    gameUser: iGameUser
    index: number
    usersCount: number
}

const VideoContainer: React.FC<iProps> = ({ peers, localStream, gameUser, index, usersCount }) => {

    const stream = gameUser.itIsMe ? localStream : peers.find(peer => peer.userId === gameUser.user!.id)

        if (gameUser.itIsMe) {

            return (
                <MyVideo stream={localStream} user={gameUser.user as any} containerNumber={index} containersCount={usersCount} styled={Styled} >
                    {hover => <GameInfoContainer gameUser={gameUser} hover={hover} />}
                </MyVideo>
            )

        }

        return (
            <UserVideo key={gameUser.user!.id} roomPeer={gameUser.user as any} peer={stream as iPeersConnection} containerNumber={index} containersCount={usersCount} styled={Styled} >
                {hover => <GameInfoContainer gameUser={gameUser} hover={hover} />}
            </UserVideo>
        )
}

export default VideoContainer