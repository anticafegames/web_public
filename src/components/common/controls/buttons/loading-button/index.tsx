import React from 'react'

import Styled from './styled'
import Button from '../button'
import ProgressBarLoading from '../../../animation/progress-bar-loading'

interface iProps extends React.HTMLAttributes<HTMLDivElement> {
    loading?: boolean
}

const LoadingButton: React.FC<iProps> = (props) => {

    const { loading, children } = props

    return (
        <Button styled={Styled} {...props}>
            <span>{children}</span>
            {loading && <ProgressBarLoading />}
        </Button>
    )
}

LoadingButton.defaultProps = {
    loading: false
}

export default LoadingButton