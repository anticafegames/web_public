import React from 'react'

interface iConnextedRoomProps {
    roomId: string,
    leaveFromRoom: () => void
}

export class ConnextedRoom extends React.Component<iConnextedRoomProps> {

    render() {

        const { roomId } = this.props

        return (
            
            <p>
                Подключены к комнате: {roomId} 
                <button onClick={this.liaveFromRoomClick.bind(this)}>Выйти из комнаты</button>
            </p>
        )
    }

    liaveFromRoomClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.props.leaveFromRoom()
        event.preventDefault()
    }
}

export default ConnextedRoom
