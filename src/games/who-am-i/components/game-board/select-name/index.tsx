import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { iGameUser } from '../../../../../core/games/who-am-i/ducks/entity/game-user-entity'
import { selectName, selectRandomName, randomNameSelector, randomNameLoadingSelector, fillNameLoadingSelector } from '../../../../../core/games/who-am-i/ducks'

import Styled from './styled'
import Input from '../../../../../components/common/controls/input-icon'
import LoadingButton from '../../../../../components/common/controls/buttons/loading-button'

interface iProps {
    IMaking: iGameUser
}

const SelectName: React.FC<iProps> = ({ IMaking }) => {

    const [makingName, changeName] = useState('')

    const dispatch = useDispatch()
    const randomName = useSelector(randomNameSelector)
    const randomNameLoading = useSelector(randomNameLoadingSelector)
    const fillNameLoading = useSelector(fillNameLoadingSelector)

    const onClickSave = () => {
        dispatch(selectName(makingName))
        changeName('')
    }

    const onClickSelectRandomName = () => {
        dispatch(selectRandomName())
    }

    useEffect(() => {
        changeName(randomName)
    }, [randomName])

    if (!IMaking) return null

    return (
        <Styled className='select-name-input-container'>
            <div className='select-name-header'>
                <span>Вы загадываете героя игроку номер {IMaking.ordernum}</span>
            </div>
            <div className='input-container'>
                <Input id='select-name-input' defaultValue={makingName} onChange={(value: string) => changeName(value)} />
                <LoadingButton onClick={onClickSelectRandomName} loading={randomNameLoading}>Случайное имя</LoadingButton>
                <LoadingButton onClick={onClickSave} loading={fillNameLoading}>Сохранить</LoadingButton>
            </div>
        </Styled>
    )
}

export default SelectName
