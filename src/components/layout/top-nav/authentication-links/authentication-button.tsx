import React from 'react'
import { useDispatch } from 'react-redux'

import { logIn } from '../../../../core/ducks/authentication'

const AuthenticationLinks: React.FC = props => {

    const dispatch = useDispatch()

    const loginClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        dispatch(logIn())
    }

    return ( 
        <a href="/" onClick={loginClick} className='auth-button' >Войти</a>
    )
}

export default AuthenticationLinks
