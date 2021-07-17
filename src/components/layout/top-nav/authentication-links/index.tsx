import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { showElement } from '../../../../core/ducks/modal'
import { isAuthorizedSelector } from '../../../../core/ducks/user'

import UserLink from './user-link'
import AuthenticationButton from './authentication-button'

const AuthenticationLinks: React.FC = props => {

    const isAuthorized = useSelector(isAuthorizedSelector)
    
    return (
        <div className='authentication-links'>
            {isAuthorized ? <UserLink /> : <AuthenticationButton />}
        </div>
    )
}

export default AuthenticationLinks
