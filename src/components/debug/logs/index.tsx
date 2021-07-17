import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Scrollbar from '../../common/scrollbar/react-custom-scrollbars'

import { listenLogs, unbindListenLogs, logsSelector } from '../../../core/ducks/admin/index'

import LogRecord from './log-record'

const Logs: React.FC = () => {

    const dispatch = useDispatch()
    
    const logs = useSelector(logsSelector)

    useEffect(() => {
        dispatch(listenLogs())
        return () => { dispatch(unbindListenLogs()) }
    }, [])

    return (

        <Scrollbar 
            style={{ height: '100%' }}
            autoHide={true}
        >

            {
                logs.map(log => <LogRecord log={log} />)
            }

        </Scrollbar>

    )

}

export default Logs