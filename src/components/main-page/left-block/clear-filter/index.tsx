import React from 'react'

import { useFilter } from '../../filter-provider'

import Block from './styled'

const ClearFilter: React.FC = props => {

    const [filter, changeFilter] = useFilter()

    return (
        <Block>
            <div className='block-content' onClick={() => changeFilter()}>
                Очистить
            </div>
        </Block>
    )
}

export default ClearFilter