import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { appKeySelector } from '../../core/ducks/authentication'

const AppInfoDiv: React.FC = ({ children }) => {

    const appName = useSelector(appKeySelector)
    const [fullscreen, changeFullScreen] = useState(false)

    document.onfullscreenchange = () => {
        changeFullScreen(!!document.fullscreenElement)
    }

    return (
        <div className={`${appName} ${fullscreen ? 'fullscreen' : ''}`} >{children}</div>
    )
}

export default AppInfoDiv
