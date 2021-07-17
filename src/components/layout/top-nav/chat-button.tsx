import React from 'react'
import { useSelector } from 'react-redux'

import { connectedRoomSelector } from '../../../core/ducks/webrtc-room'

import Icon from '../../common/materialize/icon'

interface iProps {
    chatToggle: () => void
}

const ChatButton: React.FC<iProps> = ({ chatToggle }) => {

    const connectedRoom = useSelector(connectedRoomSelector)

    return (
        <>
            {connectedRoom &&
                <div className='chat-button' onClick={chatToggle}>
                    <Icon iconKey='chat' title='Чат комнаты'/>
                </div>}
        </>
    )
}

export default ChatButton