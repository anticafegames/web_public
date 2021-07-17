import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, RouteProps, Redirect } from 'react-router-dom'

import { isAuthorizedSelector } from '../../../core/ducks/authentication'
import { connectedRoomSelector } from '../../../core/ducks/webrtc-room'

interface iProtectedRoomRouteProps extends RouteProps {
  isAuthorized: boolean
  connectedRoom: boolean
}

class ProtectedRoomRoute extends Component<iProtectedRoomRouteProps> {

  defaultProps: Partial<iProtectedRoomRouteProps> = {
    isAuthorized: false,
    connectedRoom: false
  }

  render() {
    const { isAuthorized, component, ...rest } = this.props
    return <Route {...rest} render={this.getComponent} />
  }

  getComponent = () => {
    const { isAuthorized, connectedRoom, ...rest } = this.props
    return isAuthorized && connectedRoom ? <Route {...rest} /> : <Redirect to='/' />
  }
}

export default connect(
  (state) => ({
    isAuthorized: isAuthorizedSelector(state),
    connectedRoom: connectedRoomSelector(state)
  }),
  null,
  null,
  { pure: false }
)(ProtectedRoomRoute)
