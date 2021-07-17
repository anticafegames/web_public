import styled from 'styled-components'

export default styled.div`

    .title {

        width: 100%;

        margin-bottom: 7px;

        color: #000000;
        font-size: 1.64rem;
    }

    
        .game-item {

            flex: none;

            width: 200px;
            height: 120px;

            margin-left: 20px;

            border: 3px solid #40923A;
            border-radius: 20px;

            overflow: hidden;
            background-size: cover;

            cursor: pointer;

            img {

                width: 100%;
                height: 100%;
            }

            &.unselected { 

                border: 3px solid gray;

                filter: grayscale(100%);

                &:hover {
                    filter: none;
                }
            }
        }
    

`