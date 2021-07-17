import React, { useState, useEffect } from 'react'
import { StyledComponent } from 'styled-components'

import DefaultStyled from './styled'

interface iProps {
    id: string
    checked?: boolean
    defaultChecked?: boolean
    label?: string
    className?: string
    labelClassName?: string
    classNameContainer?: string
    inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>
    styled?: StyledComponent<'div', any, {}, any>
    onChange?: (checked: boolean) => void
}

interface iCheckboxState {
    checked: boolean
}

const Checkbox: React.FC<iProps> = props => {

    const [checked, onChangeChecked] = useState(props.checked === true || props.defaultChecked === true)

    useEffect(() => {
        onChangeChecked(props.checked === true || props.defaultChecked === true)
    }, [props.checked, props.defaultChecked])

    if (!props.label)
        return null

    const styled = props.styled || DefaultStyled

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { onChange } = props
        const value = event.target.checked

        onChangeChecked(value)

        if(onChange) {
            onChange(value)
        }
    }

    return React.createElement(styled, { className: props.classNameContainer },
        <label className={props.labelClassName}>
            <input {...props.inputAttributes} type='checkbox' checked={checked} className={props.className} id={props.id} onChange={onChange} />
            <span>{props.label}</span>
        </label>
    )
}

Checkbox.defaultProps = {
    className: 'custom-control-input',
    labelClassName: 'custom-control-label',
    classNameContainer: 'custom-control custom-checkbox'
}

export default Checkbox

