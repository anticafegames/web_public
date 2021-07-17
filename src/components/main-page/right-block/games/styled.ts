import styled from 'styled-components'

import Block from '../../styled-block'

export default styled(Block)`

    margin-top: 10px;

    .block-content {

        height: 250px;
        overflow: hidden;

        .game-preview-image {
            cursor: pointer;
            width: 100%;
            height: 100%;
            background-size: cover;
        }

        &.crocodile-game {
            margin-top: 20px;
        }
    }

    @media only screen and (max-width: 1300px)  {

        .block-content { 
            height: 200px;
        }
    }
`