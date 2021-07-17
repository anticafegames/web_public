import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, RouteProps, Redirect } from 'react-router-dom'

import { isAuthorizedSelector, isAdminSelector, waitAuthenticationSelector } from '../../../core/ducks/authentication'

import GlobalPreloader from '../preloaders/global-preolader'

interface iProps extends RouteProps {
    isAuthorized: boolean
    waitAuthentication: boolean
    isAdmin: boolean
}

class ProtectedAdminRoute extends Component<iProps> {

  defaultProps: Partial<iProps> = {
    isAuthorized: false,
    isAdmin: false,
    waitAuthentication: true
  } 

  render() {
    const { isAuthorized, component, ...rest } = this.props
    return <Route {...rest} render={this.getComponent} />
  }

  getComponent = () => {

    const { isAuthorized, isAdmin, waitAuthentication, ...rest} = this.props

    if(waitAuthentication) {
        return <GlobalPreloader loading opacity100 />
    }
    
    return isAuthorized && isAdmin ? <Route {...rest} /> : <Redirect to='/' />

  }
}

export default connect(
  (state) => ({
    isAuthorized: isAuthorizedSelector(state),
    waitAuthentication: waitAuthenticationSelector(state),
    isAdmin: isAdminSelector(state)
  }),
  null,
  null,
  { pure: false }
)(ProtectedAdminRoute)
