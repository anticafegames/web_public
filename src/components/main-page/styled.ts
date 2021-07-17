import styled from 'styled-components'

export default styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 100px);
    min-height: 660px;
    
    .left-block-list {
        min-width: 400px;
    }

    .middle-block {
        margin-left: 25px;
        min-width: 400px;
    }

    .right-block-list {
        margin-left: 25px;
        min-width: 400px;
    }

    @media only screen and (max-width: 1300px)  {

        margin-top: 40px;
        flex-direction: column;

        .middle-block {
            margin-top: 30px;
            margin-left: 0;
            min-width: 300px;
        }

        .left-block-list {

            min-width: 300px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            .filter {
                margin-top: 10px;
            }

            .games {
                margin-top: 0px;
                order: -1;
            }
        }

        .right-block-list {
            min-width: 300px;
        }
    }

`