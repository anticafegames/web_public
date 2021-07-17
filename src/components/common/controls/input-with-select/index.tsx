import React, { useState, useEffect, useMemo, useRef } from 'react'
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
    iconKey?: string
    styled?: StyledComponent<'div', React.HTMLAttributes<HTMLDivElement>, {}, any>
    inputProps?: Partial<iInputIconProps>
    onChange?: (value: string) => void
}

const getDefaultValue = (props: iProps) => props.defaultValue || (props.options.length ? props.options[0].value : '')

const InputWithSelect: React.FC<iProps> = (props) => {

    const [value, changeValue] = useState(getDefaultValue(props))
    const currentOption = useMemo(() => value && props.options.find(option => option.value === value), [value, props.options])
    const [isOpenDropdown, showDropdown] = useState(false)

    useEffect(() => {
        if (props.defaultValue) {
            changeValue(getDefaultValue(props))
        }
    }, [props.defaultValue])

    useEffect(() => {
        if (props.refvalue) {
            props.refvalue.value = value!
        }
    }, [value])

    const onChange = (newValue: string) => {

        if (props.refvalue) {
            props.refvalue.value = newValue!
        }

        if (props.onChange) {
            props.onChange(newValue)
        }

        changeValue(newValue)
    }

    const actions: iAction[] = props.options.map(option => ({ text: option.text, action: () => onChange(option.value) }))

    return (

        <Styled styled={props.styled} className='input-with-select'>
            <Dropdown actions={actions} manualOpenParams={{ open: isOpenDropdown ? 'open' : 'close', autoClose: true, onChangeOpenState: (isOpen) => showDropdown(isOpen) }} >
                <Input
                    {...props.inputProps}
                    defaultValue={value}
                    icon={{
                        position: 'right',
                        iconComponent: <i className='material-icons' onClick={() => showDropdown(!isOpenDropdown)} >{props.iconKey}</i>
                    }}
                    onChange={value => onChange(value)}
                />
            </Dropdown>
        </Styled>
    )
}

InputWithSelect.defaultProps = {
    iconKey: 'arrow_drop_down'
}

export default InputWithSelect
