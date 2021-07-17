import React, { useState, useEffect, useMemo } from 'react'
import { StyledComponent } from 'styled-components'

import Styled from './styled'
import Input, { iProps as iInputIconProps } from '../input-icon'
import Dropdown, { iAction } from '../dropdown-actions'

export interface iRef {
    value: string
}
export interface iOptionProps {
    value: string,
    text: string
}

export interface iProps {
    options: iOptionProps[]
    defaultValue?: string
    refvalue?: iRef
    label?: string
    styled?: StyledComponent<'div', React.HTMLAttributes<HTMLDivElement>, {}, any>
    inputProps?: Partial<iInputIconProps>
    onChange?: (value: string) => void
}

const getDefaultValue = (props: iProps) => props.defaultValue || (props.options.length ? props.options[0].value : '')

const Select: React.FC<iProps> = (props) => {

    const [value, changeValue] = useState(getDefaultValue(props))
    const currentOption = useMemo(() => value && props.options.find(option => option.value === value), [value, props.options])

    useEffect(() => {
        if(props.defaultValue) {
            changeValue(getDefaultValue(props))
        }
    }, [props.defaultValue])

    useEffect(() => {
        if(props.refvalue) {
            props.refvalue.value = value!
        }
    }, [value])

    const onChange = (newValue: string) => {

        if(props.refvalue) {
            props.refvalue.value = newValue!
        }

        if (props.onChange) {
            props.onChange(newValue)
        }

        changeValue(newValue)
    }

    const actions: iAction[] = props.options.map(option => ({ text: option.text, action: () => onChange(option.value) }))

    return (
        
        <Styled styled={props.styled} className='select'>
            <Dropdown actions={actions} >
                <Input {...props.inputProps} defaultValue={currentOption && currentOption.text} icon={{ position: 'right', iconKey: 'arrow_drop_down' }} />
            </Dropdown>
        </Styled>
    )
}

export default Select
