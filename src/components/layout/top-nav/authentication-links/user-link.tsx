import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { iUser } from '../../../../core/ducks/authentication/entity/auth-user-entity'
import { logOut, isAdminSelector } from '../../../../core/ducks/authentication'
import { userSelector } from '../../../../core/ducks/user'

//import Dropdown, { iDropdownItem } from '../../../common/materialize/dropdown'
import Dropdown, { iAction } from '../../../common/controls/dropdown-actions'
import Icon from '../../../common/materialize/icon'
import UserImg from '../../../common/img/user-img'

declare var history: History

const UserLink: React.FC = props => {

    const dispatch = useDispatch()

    const user: iUser = useSelector(userSelector) as any
    const isAdmin = useSelector(isAdminSelector)

    let actions:iAction[] = []

    if (isAdmin) {
        actions.push({
            action: () => history.pushState('', '', '/debug'),
            text: 'Debug'
        })
    }

    actions.push({
        action: () => dispatch(logOut()),
        text: 'Выйти'
    })

    return (
        <Dropdown actions={actions} >
            <div className="top-nav-user-link valign-wrapper">
                <UserImg link={user.profilePhoto} size='user-img-s' />
                <Icon iconKey='arrow_drop_down' />
            </div>
        </Dropdown>
    )
}

export default UserLink
