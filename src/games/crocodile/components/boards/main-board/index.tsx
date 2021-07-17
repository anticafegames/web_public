import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { gameStateSelector, hostTeamSelector, hostUserSelector, nothostTeamUsersSelector, otherHostUsersSelector, roundSelector, startRound } from '../../../../../core/games/crocodile/ducks'
import { iGameUser } from '../../../../../core/games/crocodile/ducks/entity/game-user-entity'

import DefaultVideoList from '../../../../../components/room-page/video-part'
import Button from '../../../../../components/common/controls/buttons/button'
import Timer from './timer'
import Video from './video-container'
import Audio from '../../../../../components/common/audio/audio-container'


const MainBoard: React.FC = () => {

    const dispatch = useDispatch()

    const state = useSelector(gameStateSelector)

    const round = useSelector(roundSelector)

    const hostTeam = useSelector(hostTeamSelector)
    const hostUser = useSelector(hostUserSelector)
    const otherUsers = useSelector(otherHostUsersSelector)
    const nothostTeamUsers = useSelector(nothostTeamUsersSelector)

    if(state === 'prepare') {
        return <DefaultVideoList />
    }

    return (
        <>
            {hostTeam && hostTeam.name}
            <Video  gameUser={hostUser as iGameUser}/>
            <Timer />
            <Button onClick={() => dispatch(startRound())}>Начать раунд</Button>

            {
                otherUsers!.map((user, index) => <Video  gameUser={user as iGameUser} index={index} usersCount={otherUsers!.length} />)
            }

            {
                nothostTeamUsers.map(user => <Audio userId={user.userId} itIsMe={user.itIsMe} />)
            }

        </>
    )

}

export default MainBoard