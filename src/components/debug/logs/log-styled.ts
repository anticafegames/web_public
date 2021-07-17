import styled from 'styled-components'

import { iLogType } from '../../../core/ducks/admin/entity/log-entity'

interface iProps {
    type: iLogType
}

export default styled.div<iProps>`

    min-height: 50px;
    margin-top: 10px;

    display: flex;
    flex-direction: column;

    background-color: ${props => getBackgroundColor(props.type)};
    border: 1px solid black;
    cursor: pointer;

    .user-id {
        font-size: 12px;
    }

`

const getBackgroundColor = (type: iLogType) => {

    switch (type) {

        case 'error':
            return 'red'

        case 'warning':
            return 'yelow'
           
        case 'socket':
            return '#40923A' 

        case 'debug':
            return '#128972'   

        default: 
            return '#989898'

    }

}