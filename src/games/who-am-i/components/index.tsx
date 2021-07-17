import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { localStreamSelector, peersSelector, updatePropsSelector } from '../../../core/ducks/webrtc'
import { gameUsersSelector } from '../../../core/games/who-am-i/ducks'

import Styled from './styled'
import VideoContainer from './video-container'

interface iProps {
    
}

const WhoAmIGame: React.FC<iProps> = () => {

    const localStream = useSelector(localStreamSelector)!
    const peers = useSelector(peersSelector)
    const gameUsers = useSelector(gameUsersSelector)

    return (

        <Styled className='video-part game who-am-i'>
 
            <div className={`video-list peers-${gameUsers ? gameUsers.length : 0}`}>
                {
                    gameUsers.map((user, index) => <VideoContainer gameUser={user} peers={peers} localStream={localStream} index={index} usersCount={gameUsers.length} />)
                }
            </div>

        </Styled>
    )

}

export default WhoAmIGame


            /*для верстки
            
            const { localStream, peers, user, room, deviceSettingsAction } = this.props

        const y = [1,2,3,1,1,1,1,1,1,1,1]
        
        return (

            <div className='video-part'>

                <div className={`video-list peers-${y ? y.length : 0}`}>

                {
                    y.map(item => <MyVideo stream={localStream} user={user} deviceSettingsAction={deviceSettingsAction} />)
                }
                
                </div>

            </div>
        )*/

        /*<div className='video-part'>

                <div className={`video-list peers-${peers ? peers.length : 0}`}>

                <MyVideo stream={localStream} user={user} deviceSettingsAction={deviceSettingsAction} />

                {
                    peers && peers.map(item => <UserVideo room={room} peer={item} deviceSettingsAction={deviceSettingsAction} />)
                }
                
                </div>

            </div>*/