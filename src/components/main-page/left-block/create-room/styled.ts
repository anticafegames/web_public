import styled from 'styled-components'

import Block from '../../styled-block'

export default styled(Block)`

    cursor: pointer;
    margin-top: 20px;
    font-size: 20px;
    letter-spacing: 2px;

    .block-content {
        text-align: center;

        &:hover {
            background-color: #487545;
        }
    }

`