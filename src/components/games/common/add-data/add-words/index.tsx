import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import Toast from '../../../../../core/code/alerts/toast'
import { gameKey } from '../../../../../core/ducks/games-common/entity/interface'
import { addGameData } from '../../../../../core/ducks/games-add-data'

import Styled from './styled'
import Chips from '../../../../common/controls/chips'

interface iProps {
    gameKey: gameKey
}

const AddWords: React.FC<iProps> = (props) => {

    const dispatch = useDispatch()
    const refValues = useMemo(() => ({ values: [] } as any), [])

    const onClickAdd = () => {
        refValues.selectWordsFromInput()
        dispatch(addGameData(props.gameKey, refValues.values))
        refValues.clear()
        Toast.messageToast('Данные отправлены. Благодарим Вас за помощь в развитии проекта.')
    }

    return (
        <Styled>
            <div className='block-title'>
                Новые слова:
            </div>
            <Chips placeholder='введите слова через запятую' refValues={refValues} />
            <span className='btn' onClick={onClickAdd}>Добавить</span>
        </Styled>
    )

}

export default AddWords