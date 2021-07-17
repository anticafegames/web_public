import React from 'react'

import { useFilter } from '../../../../filter-provider'

import Block from './styled'

interface iProps {
    emptyRoomList: boolean
}

const RoomListEmpty: React.FC<iProps> = ({ emptyRoomList }) => {

    const [filter, changeFilter] = useFilter()

    if (!emptyRoomList && !filter.isDefaultFilter) {

        return (
            <Block>
                <div className='block-content'>
                    <div className='clear-filter'>
                        <span>Не найдено ни одной комнаты.</span>
                        <span className='button shadow-bottom' onClick={() => changeFilter()}>Очистить фильтр</span>
                    </div>
                </div>
            </Block>
        )
    }

    return (
        <Block>
            <div className='block-content'>
                <span>Свободные комнаты отсутствуют</span>
            </div>
        </Block>
    )
}

export default RoomListEmpty