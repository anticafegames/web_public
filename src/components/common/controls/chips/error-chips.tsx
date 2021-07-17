import React from 'react'

import Chips from './index'

interface iProps {
    id: string,
    name?: string,
    placeholder?: string,
    input: any,
    meta: any,
}

const ErrorChips: React.FC<iProps> = () => {


    return (
        <Chips />
    )
}

export default ErrorChips