import styled from 'styled-components'

interface iProps {
    opacity100: boolean
}

export default styled.div<iProps>` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    z-index: 1011;
    background-color: #E5E5E5;
    opacity: ${props => props.opacity100 ? 1 : 0.8};

    .animation-container {
        margin: auto;
    }
`