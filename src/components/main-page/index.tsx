import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { connectedRoomSelector } from '../../core/ducks/webrtc-room'
import { FilterProvider } from './filter-provider'

import Styled from './styled'
import LeftBlock from './left-block'
import MiddleBlock from './middle-block'
import RightBlock from './right-block'

const MainPage: React.FC = props => {

    const connectedRoom = useSelector(connectedRoomSelector)
    
    if (connectedRoom) {
        return (<Redirect to='/room' />)
    }

    return (
        <FilterProvider>
            <Styled>
                <LeftBlock />
                <MiddleBlock />
                <RightBlock />
            </Styled>
        </FilterProvider>
    )
}

export default MainPage