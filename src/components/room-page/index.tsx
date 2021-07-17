import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Games from '../../core/games/games'
import { roomSelector, roomUsersSelector } from '../../core/ducks/webrtc-room'
import { iRoom } from '../../core/ducks/webrtc-room/entity/room-entity'
import { gameKey } from '../../core/ducks/games-common/entity/interface'
import { gameKeySelector } from '../../core/ducks/games-common'
import { errorMessage } from '../../core/code/messages'

import Styled from './styled'
import VideoPart from './video-part'

const SwitchGames: React.FC = () => {

    const room = useSelector(roomSelector)
    const gameKey = useSelector(gameKeySelector)!

    const game = useMemo(() => getRoom(room, gameKey), [room.status, gameKey])

    return (

        <Styled>
            {game}
        </Styled>

    )
}

const getRoom = (room: iRoom, gameKey: gameKey) => {
    
    if (room.status === 'wait' || room.status === 'check-ready') {
        return <VideoPart />
    }

    const game = Games.getGame(gameKey)

    if(!game) {
        return <VideoPart />
    }

    return game.gameboard
}

export default SwitchGames
