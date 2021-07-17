import React from 'react'

import { useFilter } from '../../filter-provider'

import Block from './styled'
import Input from '../../../common/controls/input-icon'
import Checkbox from '../../../common/controls/checkbox'
import StyledInput from './styled-input'
import StyledCheckbox from './styled-checkbox'

const Filter: React.FC = props => {

    const [filter, changeFilter] = useFilter()

    return (
        <Block className='filter'>
            <div className='block-title'>
                Навигация
            </div>
            <div className='block-content'>
                <Input id='roomId' inputAttributes={{ placeholder: 'ID комнаты' }} defaultValue={filter.roomId} styled={StyledInput} onChange={roomId => changeFilter({ roomId })} />
                <Input id='ownerName' inputAttributes={{ placeholder: 'Имя владельца' }} defaultValue={filter.ownerName} styled={StyledInput} onChange={ownerName => changeFilter({ ownerName })} />
                <Checkbox id='openRoom' label='Открытая комната' styled={StyledCheckbox} checked={filter.openRoom} classNameContainer='open-room-container' onChange={openRoom => changeFilter({ openRoom })} />
            </div>
        </Block>
    )
}

export default Filter