import React from 'react'
import { Switch, Route } from 'react-router'

import DebugLinks from '../../components/debug/links'
import Users from '../../components/debug/users'
import Rooms from '../../components/debug/rooms'
import Logs from '../../components/debug/logs'

interface iProps {

}

const DebugPage: React.FC<iProps> = () => {

    return (
        <>
            <DebugLinks />
            <Switch>
                <Route path="/debug/rooms" exact={true} component={Rooms} />
                <Route path="/debug/logs" exact={true} component={Logs} />
                <Route path="/debug" component={Users} />
            </Switch>

        </>
    )

}

export default DebugPage
