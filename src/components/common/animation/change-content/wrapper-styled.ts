import styled from 'styled-components'

export default styled.div`

    width: 100%;
    height: 100%;

    &.animation {

        position: relative;

        .content, .last-content {
            width: 100%;
            height: 100%;
            position: absolute;
        }
    }

`