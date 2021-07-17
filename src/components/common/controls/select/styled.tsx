import React from 'react'
import styled from 'styled-components'

interface iProps extends React.HTMLAttributes<HTMLDivElement> {
    styled?: any
    children: any
}

export const DefaultStyled = styled.div`

    cursor: pointer;

    .input-icon {

        display: flex;
        position: relative;
        align-items: center;

        .material-icons {
            position: absolute;
            right: 11px;
            margin-bottom: 12px;
        }
    }

    .dropdown-actions {

        width: 100%;

        .dropdown-content {
            width: 100%;
            top: 0;
            bottom: auto;
        }
    }

`

const Styled: React.FC<iProps> = (props) => {
    const { styled, children } = props
    const element = styled || DefaultStyled
    return React.createElement(element, props, children)
}

export default Styled