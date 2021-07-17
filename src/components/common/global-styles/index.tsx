import React from 'react'

import GlobalStyle from './global-style'
import Div from './global-div'

const GlobalDiv: React.FC = ({ children }) => {

    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default GlobalDiv