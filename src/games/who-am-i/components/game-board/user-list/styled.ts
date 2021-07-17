import styled from 'styled-components'

export default styled.div`

    .user {

        display: flex;
        align-items: center;
        
        padding: 15px;
        margin: 0 0 20px;

        background-color: #40923A;
        color: #f5f5f5;
        border-radius: 10px;

        .user-image {
            margin-right: 12px;
        }

        .user-collection-content {
            flex-grow: 1;

            .name.filled {
                cursor: pointer;
            }
        }
    }

`