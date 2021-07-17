import styled from 'styled-components'

import Block from '../../styled-block'

export default styled(Block)`

.block-title {
    
    .lobby {

        flex-direction: column;
        display: flex;
        width: max-content;

        .length {
            color: #535050;
            font-size: 13px;
            letter-spacing: 0;
            align-self: flex-end;
            margin-top: -9px;
        }
    }

    &:not(.empty-room) {
        margin-bottom: 2px;
        margin-top: -5px;
    }
}

`