import React from 'react'

import { iShortRoom } from '../../../../../core/ducks/webrtc-rooms/entity/rooms-entity'
import { useWindowParams } from '../../../../../code/context/window-params-context'

import Styled from './styled'
import Scrollbar from '../../../../common/scrollbar/react-custom-scrollbars'
import EmptyRoomList from './empty-room-list'
import RoomListItem from './room-list-item'
import TransitionList from '../../../../common/animation/transition-list'

interface iProps {
    rooms: iShortRoom[]
    emptyRoomList: boolean
}

const RoomList: React.FC<iProps> = ({ rooms, emptyRoomList }) => {

    const [screenSize] = useWindowParams()

    if (!rooms.length) {
        return <EmptyRoomList emptyRoomList={emptyRoomList} />
    }

    const animations = [
        { key: 'height', defaultValue: { value: 65, config: { stiffness: 100, damping: 20 }} , enterValue: 0, leaveValue: { value: 0, config: { stiffness: 300, damping: 50 } }},
        { key: 'opacity', defaultValue: { value: 100, config: { stiffness: 100, damping: 20 } }, enterValue: 0, leaveValue: 0 },
        { key: 'margin', defaultValue: 15, enterValue: 15, leaveValue: { value: 0, config: { stiffness: 300, damping: 50 } }}
    ]

    return (
        <Scrollbar
            style={{ maxHeight: '612px', height: screenSize.width < 1300 ? (75 * rooms.length) : 612 }}
            autoHide={true}
        >
            <Styled>
                <TransitionList items={rooms} animations={animations} >
                    {config => (
                        <>
                            {config.map(item => <RoomListItem room={item.data} style={item.style} />)}
                        </>
                    )}
                </TransitionList>
            </Styled>
        </Scrollbar>
    )
}

export default RoomList
