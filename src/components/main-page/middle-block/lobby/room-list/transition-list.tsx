import React from 'react'
import { TransitionMotion, TransitionStyle, PlainStyle, spring } from 'react-motion'
import { iShortRoom } from '../../../../../core/ducks/webrtc-rooms/entity/rooms-entity'


interface iRoomListProps {
    rooms: iShortRoom[]
    children: (config: TransitionStyle[]) => JSX.Element 
}

export class RoomList extends React.Component<iRoomListProps> {

    render() {

        const { rooms, children } = this.props

        return (
            <TransitionMotion
                willLeave={this.willLeave}
                willEnter={this.willEnter}
                styles={rooms.map(item => {

                    const style: TransitionStyle = {
                        key: item.id,
                        style: { height: spring(65, { stiffness: 100, damping: 20 }), opacity: spring(10, { stiffness: 100, damping: 20 }), margin: 15 },
                        data: item
                    }

                    return style
                })}>
                {config => children(config)}
            </TransitionMotion>
        )
    }

    willLeave = () => ({ opacity: 0, height: spring(0, { stiffness: 300, damping: 50 }), margin: spring(0, { stiffness: 300, damping: 50 }) })
    willEnter = () => ({ opacity: 0, height: 0, margin: 15 })
}

export default RoomList
