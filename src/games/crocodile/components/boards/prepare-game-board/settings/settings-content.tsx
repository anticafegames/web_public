import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { packsSelector, packsLoadingSelector, settingsParamsSelector, loadPacks, changeSettings } from '../../../../../../core/games/crocodile/ducks'

import Loading from '../../../../../../components/common/preloaders/preloader-area'
import Button from '../../../../../../components/common/controls/buttons/button'
import InputWithSelect, { iOptionProps } from '../../../../../../components/common/controls/input-with-select'
import Select, { iRef } from '../../../../../../components/common/controls/select'

interface iProps {

}

const getSecondsOptions = () => {

    let options: iOptionProps[] = []

    for (let i = 6; i <= 30; i++) {
        const value = i * 10 + '';
        options.push({ value, text: value })
    }

    return options
}

const SettingsContent: React.FC<iProps> = () => {

    const timerOptions = useMemo(() => getSecondsOptions(), [])
    const dispatch = useDispatch()

    const packsLoading = useSelector(packsLoadingSelector)
    const packs = useSelector(packsSelector)!
    const params = useSelector(settingsParamsSelector)

    const refvalueTimer: iRef = useMemo(() => ({ value: params.timer.toString() }), [params.timer])
    const refvaluePack: iRef = useMemo(() => ({ value: params.pack }), [params.pack])

    useEffect(() => {
        dispatch(loadPacks())
        return () => { debugger; dispatch(changeSettings({ timer: Number.parseInt(refvalueTimer.value), pack: refvaluePack.value })) }
    }, [])

    if (packsLoading || !packs) {
        return <Loading animationKey='horizont' />
    }

    return (
        <>
            <div className='block-title'>Настройки игры</div>
            <div className='fields'>
                <InputWithSelect
                    defaultValue={refvalueTimer.value}
                    options={timerOptions}
                    refvalue={refvalueTimer}
                    iconKey='access_time'
                    inputProps={{ type: 'number', min: 30, max: 300, label: 'Таймер:' }}
                />
                <Select
                    defaultValue={refvaluePack.value}
                    options={packs}
                    refvalue={refvaluePack}
                    inputProps={{ label: 'Пакет:' }}
                />
            </div>
        </>
    )
}

export default SettingsContent
