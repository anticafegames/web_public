import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, RouteProps, Redirect } from 'react-router-dom'

import { isAuthorizedSelector, isDeveloperSelector, waitAuthenticationSelector } from '../../../core/ducks/authentication'

import GlobalPreloader from '../preloaders/global-preolader'

interface iProps extends RouteProps {
    isAuthorized: boolean
    waitAuthentication: boolean
    isDeveloper: boolean
}

class ProtectedDeveloperRoute extends Component<iProps> {

  defaultProps: Partial<iProps> = {
    isAuthorized: false,
    isDeveloper: false,
    waitAuthentication: true
  } 

  render() {
    const { isAuthorized, component, ...rest } = this.props
    return <Route {...rest} render={this.getComponent} />
  }

  getComponent = () => {

    const { isAuthorized, isDeveloper, waitAuthentication, ...rest} = this.props

    if(waitAuthentication) {
        return <GlobalPreloader loading opacity100 />
    }
    
    return isAuthorized && isDeveloper ? <Route {...rest} /> : <Redirect to='/' />

  }
}

export default connect(
  (state) => ({
    isAuthorized: isAuthorizedSelector(state),
    waitAuthentication: waitAuthenticationSelector(state),
    isDeveloper: isDeveloperSelector(state)
  }),
  null,
  null,
  { pure: false }
)(ProtectedDeveloperRoute)
