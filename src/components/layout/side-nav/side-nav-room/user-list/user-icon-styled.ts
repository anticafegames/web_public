import styled from 'styled-components'

export default styled.div`

&.responsive-img {
        margin: auto;
        position: relative;


        .room-user-icon.material-icons {
            position: absolute;
            font-size: 15px;

            &.owner {
                color: gold !important;
                position: absolute;
                bottom: -5px;
            }

            &.disconnected {
                color: red;
                position: absolute;
                right: -4.5px;
                bottom: -8px;
                font-size: 19px;
            }

            &.mic {
                position: absolute;
                font-size: 35px;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: black;
                opacity: 0.5;
                border-radius: 10px;
            }
        }

        .room-user-icon-overlay {
            position: absolute;
            font-size: 35px;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: black;
            opacity: 0.5;
            border-radius: 10px;
        }
    }

`