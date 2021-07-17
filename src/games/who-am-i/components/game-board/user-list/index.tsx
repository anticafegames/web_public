import React from 'react'

import { iGameUser } from '../../../../../core/games/who-am-i/ducks/entity/game-user-entity'

import Styled from './styled'
import User from './user'

interface iProps {
    gameUsers: iGameUser[]
}

const UserList: React.FC<iProps> = ({ gameUsers }) => {

    return (
        <Styled >
            {
                gameUsers.map(user => <User gameUser={user} />)
            }
        </Styled>
    )
}

export default UserList
