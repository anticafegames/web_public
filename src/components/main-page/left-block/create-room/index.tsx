import React from 'react'
import { useDispatch } from 'react-redux'

import Modals from '../../../../core/code/modals'

import Block from './styled'

const CreateRoomButton: React.FC = props => {

    const dispatch = useDispatch()
    const createRoom = () => dispatch(Modals.showCreateRoomFormPageModal())

    return (
        <Block>
            <div className='block-content' onClick={createRoom}>
                Создать комнату
            </div>
        </Block>
    )
}

export default CreateRoomButton