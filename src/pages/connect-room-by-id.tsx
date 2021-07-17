import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'

import GlobalPreloader from '../components/common/preloaders/global-preolader'

interface iProps {
    match: any
}

const CoonectRoomPage: React.FC<iProps> = () => {
    
    return (
        <GlobalPreloader opacity100={true} />
    )
}

export default CoonectRoomPage