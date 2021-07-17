import React from 'react'
import { StyledComponent } from 'styled-components'

import Styled from './styled'

interface iProps extends React.HTMLAttributes<HTMLDivElement> {
    styled?: StyledComponent<'div', React.HTMLAttributes<HTMLDivElement>, {}, any>
}

const Button: React.FC<iProps> = (props) => {

    const { styled, children } = props

    return (
        <Styled styled={styled} className='btn' {...props}>
            <span>{children}</span>
        </Styled>
    )
}

export default Button