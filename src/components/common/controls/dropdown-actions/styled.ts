import styled from 'styled-components'

export interface iProps {
    top?: string
    right?: string
    bottom?: string
    left?: string
}

export default styled.div<iProps>` 

    position: relative;
    cursor: pointer;

    .dropdown-actions-content {
        display: flex;
    }

    .dropdown-content {
        position: absolute;
        display: block;
        max-height: 300px;
        opacity: 1;
        top: ${props => props.top || 'auto'};
        right: ${props => props.top || 0};
        bottom: ${props => props.top || '-62px'};
        left: ${props => props.top || 'auto'};
    }

`