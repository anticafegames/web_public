import React from 'react'
import styled from 'styled-components'

export interface iProps extends React.HTMLAttributes<HTMLDivElement> {
    styled?: any
}

export const DefaultStyled = styled.div`

`

const Styled: React.FC<iProps> = (props) => {

    const { styled, children } = props
    const element = styled || DefaultStyled
    
    return React.createElement(element, props, children)
}

export default Styled