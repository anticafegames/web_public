import React from 'react'

import { iLog } from '../../../core/ducks/admin/entity/log-entity'

import Styled from './log-styled'

interface iProps {
    log: iLog
}

const LogRecord: React.FC<iProps> = ({ log }) => {

    return (

        <Styled type={log.type} onClick={() => console.log(log)} title='Подробная информация в консольке, после клика'>
            <span className='message'>{log.message}</span>
            <span className='user-id'>{log.userId}</span>
        </Styled>

    )
}

export default LogRecord