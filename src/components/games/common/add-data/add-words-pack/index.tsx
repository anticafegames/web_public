import React, { useMemo, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Toast from '../../../../../core/code/alerts/toast'
import { gameKey } from '../../../../../core/ducks/games-common/entity/interface'
import { addGameData, getPreviewToAddData, clearPreviewToAddData, loadingPreviewToAddDataSelector, previewDataSelector } from '../../../../../core/ducks/games-add-data'

import Styled from './styled'
import Chips from '../../../../common/controls/chips'
import Select from '../../../../common/controls/select'
import Loading from '../../../../common/preloaders/preloader-area'

interface iProps {
    gameKey: gameKey
}

const AddWordsPack: React.FC<iProps> = ({ gameKey }) => {

    const dispatch = useDispatch()
    
    const refPackValue = useMemo(() => ({ value: '' }), [])
    const refValues = useMemo(() => ({ values: [] } as any), [])

    const loading = useSelector(loadingPreviewToAddDataSelector)
    const previewData = useSelector(previewDataSelector)

    useEffect(() => {
        dispatch(getPreviewToAddData(gameKey))
        return () => { dispatch(clearPreviewToAddData()) }
    }, [])

    const onClickAdd = () => {
        refValues.selectWordsFromInput()
        dispatch(addGameData(gameKey, { pack: refPackValue.value, words: refValues.values}))
        refValues.clear()
        Toast.messageToast('Данные отправлены. Благодарим Вас за помощь в развитии проекта.')
    }

    if(loading || !(previewData && previewData.data)) {
        return (
            <Styled><Loading animationKey='horizont' /></Styled>
        )
    }
    
    return (
        <Styled>

            <div className='block-title'>Пакет:</div>
            <Select options={previewData!.data.map((pack: any) => ({ value: pack.value, text: pack.text }))} refvalue={refPackValue} />

            <div className='block-title'>Новые слова:</div>
            <Chips placeholder='введите слова через запятую' refValues={refValues} />
            

            <span className='btn' onClick={onClickAdd}>Добавить</span>
        </Styled>
    )
}

export default AddWordsPack