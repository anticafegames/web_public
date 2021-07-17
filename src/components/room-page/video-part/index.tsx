import React from 'react'
import { useSelector } from 'react-redux'

import { localStreamSelector, peersSelector, updatePropsSelector, presenterConnnectionSelector } from '../../../core/ducks/webrtc'
import { roomSelector } from '../../../core/ducks/webrtc-room'
import { userSelector } from '../../../core/ducks/user'

import Styled from './styled'
import MyVideo from '../../common/video/my-video'
import UserVideo from '../../common/video/user-video'

const VideoPart: React.FC = () => {

    const presenter = useSelector(presenterConnnectionSelector)
    const peers = useSelector(peersSelector) as any[]
    const localStream = useSelector(localStreamSelector)
    const user = useSelector(userSelector) as any
    const room = useSelector(roomSelector)
    useSelector(updatePropsSelector)

    const containersCount = peers ? peers.length + 1 : 1
    
    return (

        <Styled className='video-part'>

            <div className={`video-list peers-${containersCount}`}>

            <MyVideo stream={localStream} user={user} containerNumber={1} containersCount={containersCount} />

            {
                peers && peers.map((item, index) => <UserVideo key={item.userId} room={room} peer={item} containerNumber={index + 2} containersCount={containersCount} />)
            }
            
            </div>

        </Styled>
    )

    /*
    Для исправления верстки
    const y = [1,2,3,1,1,1,5,6]

    return (

        <Styled className='video-part'>

            

                <div className={`video-list peers-${y.length}`}>

                {
                    y.map((item, index) => <MyVideo stream={localStream} user={user} containerNumber={index + 1} containersCount={y.length} />)
                }
                
                </div>

    </Styled>

    )
    
    */
}

export default VideoPart

            /*для верстки
            
            render() {

        const { localStream, peers, user, room, deviceSettingsAction } = this.props

        const y = [1,2,3,1,1,1]
        
        return (

            <div className='video-part'>

                <div className={`video-list peers-${y ? y.length : 0}`}>

                {
                    y.map((item, index) => <MyVideo stream={localStream} user={user} deviceSettingsAction={deviceSettingsAction} containerNumber={index+1} />)
                }
                
                </div>

            </div>
        )
    }*/

        

            /*
            return (

        <Styled className='video-part'>

            <div className={`video-list peers-${containersCount}`}>

            <MyVideo stream={localStream} user={user} containerNumber={1} containersCount={containersCount} />

            {
                peers && peers.map((item, index) => <UserVideo key={item.userId} room={room} peer={item} containerNumber={index + 2} containersCount={containersCount} />)
            }
            
            </div>

        </Styled>
    )
        */

