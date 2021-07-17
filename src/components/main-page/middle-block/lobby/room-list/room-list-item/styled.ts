import styled from 'styled-components'

interface iProps {
    opacity: number
    height: number
    margin: number
}

export default styled.div<iProps>`

    height: ${props => props.height}px;
    opacity: ${props => props.opacity/10};
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    background-color: #40923A;
    border-radius: 10px;
    color: #F1F1F1;

    box-shadow: 0 2px 4px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.22);

    &:not(:first-child) {
        margin-top: ${props => props.margin}px;
    }

    .close-room {
        font-size: 25px;
        margin-left: 20px;
    }

    .user-image {
        margin-left: 10px;
    }
    .owner-name-block {

        margin-left: 15px;
        display: flex;
        flex-direction: column;

        .users-length {
            color: #D0CECE;
            font-size: 11px;
        }
    }

    .more-button {
        font-size: 25px;
        margin-right: 20px;
    }

`