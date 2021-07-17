import React from 'react'
import styled from 'styled-components'

export interface iProps extends React.HTMLAttributes<HTMLDivElement> {
    styled?: any
}

export const DefaultStyled = styled.div`

    width: 100%;

    label {
        font-size: 16px;
        margin-right: 10px;
        color: #000000;
    }

    input:not(.browser-default):focus:not([readonly]) {
        border-bottom: 1px solid #40923A;
        box-shadow: 0 1px 0 0 #40923A;
    }

`

const Styled: React.FC<iProps> = (props) => {
    const { styled, children } = props
    const element = styled || DefaultStyled
    return React.createElement(element, props, children)
}

export default Styled