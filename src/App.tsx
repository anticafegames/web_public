import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import ExternalScripts from './components/common/external-scripts'

import './style'
import './code/window'
import './di'

import Layout from './components/layout'

import ProtectedRoomRoute from './components/common/routes/protected-room-route'
import ProtectedAdminRoute from './components/common/routes/protected-admin-route'
import ProtectedDeveloperRoute from './components/common/routes/protected-developer-route'

import MainPage from './pages/main-page'
import RoomPage from './pages/room-page'
import DebugPage from './pages/debug/debug-page'
/*import ChatPage from './pages/chat-page'*/
import Auth from './pages/authentication'
//import ConnectRoomById from './pages/connect-room-by-id'
import GlobalStyles from './components/common/global-styles'
import GlobalPreloader from './components/common/preloaders/global-preolader'
import Modal from './components/modal'
import ToastContainer from './components/common/toasts/toast-container'
import { WindowParamsProvider } from './code/context/window-params-context'

const App: React.FC = () => {

  return (
    <GlobalStyles>

      <WindowParamsProvider>

        <Layout>

          <Modal />
          <ToastContainer />
          <GlobalPreloader />

          <Switch>
            <Route path='/auth' exact={true} component={Auth} />
            <ProtectedRoomRoute path='/room' exact={true} component={RoomPage} />
            <ProtectedDeveloperRoute path='/debug' component={DebugPage} />
            <Route path='/' component={MainPage} />
          </Switch>

        </Layout>

      </WindowParamsProvider>

      <ExternalScripts />

    </GlobalStyles>
  )

}

export default App
