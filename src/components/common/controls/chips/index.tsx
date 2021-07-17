import React, { useState, useRef, useEffect } from 'react'

import Styled from './styled'
import ChipItem from './chip-item'

export interface iRefValues {
    values: string[]
    clear?: () => void
    selectWordsFromInput?: () => void
}

interface iProps {

    defaultValues?: string[]
    separator?: string
    placeholder?: string

    onChange?: (values: string[]) => void
    refValues?: iRefValues
}

const Chips: React.FC<iProps> = (props) => {

    const [focus, changeFocus] = useState(false)
    const [values, changeValues] = useState<string[]>(props.defaultValues!)

    const inputRef = useRef<HTMLInputElement>(null)

    const onFocusDiv = (event: React.FocusEvent<HTMLDivElement>) => {
        changeFocus(true)
        inputRef.current!.focus()
    }

    const onUnfocusDiv = (event: React.FocusEvent<HTMLDivElement>) => {
        changeFocus(false)
    }

    const onClickDiv = () => {
        changeFocus(true)
        inputRef.current!.focus()
    }

    const omChangeValues = (newValues: string[]) => {

        changeValues(newValues)

        if (props.onChange) {
            props.onChange(newValues)
        }
    }

    const selectWords = () => {

        const input = inputRef.current!

        const value = input.value.trim()
        input.value = ''

        if (!value) return

        const words = value.split(props.separator!).map(word => word && word.toLocaleLowerCase().trim())

        let newValues = [...values]
        let updateValues = false

        words.forEach(word => {

            if (!newValues.some(text => text === word)) {
                newValues.push(word)
                updateValues = true
            }
        })

        if (updateValues) {
            
            if (props.refValues) {
                props.refValues.values = newValues
            }

            omChangeValues(newValues)
        }
    }

    const oninput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        
        if (event.charCode === 13) {
            selectWords()
        }
    }

    const deleteChip = (index: number) => {
        let items = [...values]
        items.slice(index, 1)
        omChangeValues(items)
    }

    useEffect(() => {
        if (props.refValues) {
            props.refValues.values = values
            props.refValues.clear = () => omChangeValues([])
            props.refValues.selectWordsFromInput = () => selectWords()
        }
    }, [values])


    return (

        <Styled className={`chips chips-initial input-field${focus ? ' focus' : ''}`} onFocus={onFocusDiv} onBlur={onUnfocusDiv} onClick={onClickDiv}>
            <>
                {
                    values.map((value, index) => <ChipItem key={value} value={value} deleteItem={() => deleteChip(index)} />)
                }
            </>
            <input className='input' ref={inputRef} placeholder={props.placeholder} onKeyPress={oninput} />
        </Styled>
    )
}

Chips.defaultProps = {
    defaultValues: [],
    separator: ','
}

export default Chips