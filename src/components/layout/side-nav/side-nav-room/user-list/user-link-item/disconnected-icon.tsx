import React from 'react'
import Icon from '../../../../../common/materialize/icon'

const DisconnectedIcon: React.FC = () => {

    return (
        <>
            <div className='room-user-icon-overlay disconnected' /> 
            <Icon iconKey='close' className='room-user-icon disconnected' title='Игрок не в сети' />
        </>
    )
}

export default DisconnectedIcon
