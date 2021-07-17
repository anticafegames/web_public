import React from 'react'
import { ToastContainer } from 'react-toastify'

import Styled from './styled-container'

const Toasts: React.FC = props => {

    return (
        <Styled>
            <ToastContainer />
        </Styled>
    )
}

export default Toasts

