import styled from 'styled-components'

import DefaultModalStyled from '../../../modal/styled'

export default styled(DefaultModalStyled)`

.modal {
    height: 165px;
}

.users {
    display: flex;
    justify-content: center;

    margin-bottom: 20px;

    .user-icon {
        position: relative;
        width: 60px;
        height: 60px;
        margin: 0 10px;

        .check {
            position: absolute;
            border-radius: 50px;
            top: 40px;
            background-color: white;
            font-size: 25px;
            color: green;
            font-weight: bold;
            cursor: default;
        }
    }
}

.buttons {

    display: flex;
    justify-content: center;

    .btn {
        margin: 0 10px;
    }
}

`