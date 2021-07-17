import React from 'react'
import { NavLink } from 'react-router-dom'

import Styled from './styled'

const DebugLinks: React.FC = () => {

    return (

        <Styled>

            <NavLink to='/debug/users' className='link'>Пользователи</NavLink>
            <NavLink to='/debug/rooms' className='link'>Комнаты</NavLink>
            <NavLink to='/debug/logs' className='link'>Логи</NavLink>

        </Styled>

    )
}

export default DebugLinks