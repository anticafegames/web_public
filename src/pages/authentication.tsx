import React from 'react'

import GlobalPreloader from '../components/common/preloaders/global-preolader'

declare var opener: any

interface iProps {
    location: any
}

const AuthenticationPage: React.FC<iProps> = ({ location }) => {

    if (opener && opener.VkAuth) {
        opener.VkAuth(location.hash)
    }

    window.close()

    return (
        <GlobalPreloader loading opacity100 />
    )
}

export default AuthenticationPage
