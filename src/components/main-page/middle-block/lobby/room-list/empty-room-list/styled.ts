import styled from 'styled-components'

export default styled.div`

    height: 612px;
    display: flex;
    justify-items: center;
    align-items: flex-start;

    .block-content {

        height: 171px;
        display: flex;
        justify-content: center;
        align-items: center;

        .clear-filter {

            display: flex;
            flex-direction: column;
            align-items: center;

            .button {
                margin-top: 10px;
                background-color: #487545;
                border-radius: 10px;
                padding: 5px;
                cursor: pointer;
                width: max-content;
            }
        }
    }
    
    @media only screen and (max-width: 1300px)  { 

        height: 170px;

    }

`