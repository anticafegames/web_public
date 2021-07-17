import React from 'react'

import Styled from './styled'


interface iProps extends React.HTMLAttributes<HTMLDivElement> {
    loading?: boolean
}

const ProgressBarLoading: React.FC<iProps> = (props) => {

    const { loading } = props

    return (
        <>
            {loading && <Styled className="progress" {...props} >
                <div className="indeterminate" />
            </Styled>}
        </>
    )
}

ProgressBarLoading.defaultProps = {
    loading: true
}

export default ProgressBarLoading