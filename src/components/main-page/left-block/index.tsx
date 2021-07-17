import React from 'react'

import Filter from './filter'
import ClearFilter from './clear-filter'
import CreateRoom from './create-room'
import Games from '../right-block/games'

const LeftBlock: React.FC = props => {

    return (
        <div className='left-block-list'>
            <Filter />
            <ClearFilter />
            <CreateRoom />
            <Games />
        </div>
    )
}

export default LeftBlock