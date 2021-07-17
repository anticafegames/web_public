import React, { useEffect, useState, useMemo, useRef } from 'react'
import { StyledComponent } from 'styled-components'

import getKeyFilter from './filters'

import Styled from './styled'

export interface iInputRef {
    value: string
    props: iProps
    refInput: React.RefObject<HTMLInputElement>
    onChange: (value: string) => void
}

interface iIcon {
    iconKey?: string
    iconComponent?: JSX.Element
    position: 'left' | 'right'
}

export interface iProps {
    id?: string
    refInput?: (ref: iInputRef) => void
    icon?: iIcon
    name?: string
    className?: string
    classNameContainer?: string
    type?: 'text' | 'number' | string
    label?: string
    min?: number
    max?: number
    defaultValue?: string
    inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>
    placeholder?: string
    styled?: StyledComponent<'div', React.HTMLAttributes<HTMLDivElement>, {}, any>
    onChange?: (value: string) => void
    CustomFilter?: (eventKey: 'onkeypress' | 'onchange' | 'onblur', event: any, ref: iInputRef) => boolean
}

const getIcon = (position: 'left' | 'right', icon?: iIcon) => {
    return (icon && icon.position === position)
        && (icon.iconKey ? <i className='material-icons'>{icon.iconKey}</i> : icon!.iconComponent)
}

const InputIcon: React.FC<iProps> = props => {

    const [value, changeValue] = useState(props.defaultValue || '')
    const filter = useMemo(() => getKeyFilter(props), [props.CustomFilter])

    const onChange = (value: string) => {

        const { onChange } = props

        if (onChange) {
            onChange(value)
        }

        changeValue(value)
    }

    useEffect(() => {
        changeValue(props.defaultValue || '')
    }, [props.defaultValue])

    const refInput = useRef(null) as React.RefObject<HTMLInputElement>
    const ref = useRef<iInputRef>({ value, props, refInput, onChange })

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (filter && !filter('onchange', event, ref.current)) {
            return
        }
        debugger
        onChange(event.target.value)
    }

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        let isValid = filter ? filter('onkeypress', event, ref.current) : true

        if (!isValid) {

            event.preventDefault()
            event.stopPropagation()

            return false
        }

        return true
    }

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {

        if (filter && !filter('onblur', event, ref.current)) {
            return
        }
    }

    if (props.refInput) {
        props.refInput(ref.current)
    }

    return (
        <Styled styled={props.styled} className={props.classNameContainer}>
            <>
                {getIcon('left', props.icon)}
                {props.label && <label>{props.label}</label>}
                <input
                    ref={refInput}
                    className={props.className}
                    name={props.name}
                    value={value}
                    {...props.inputAttributes}
                    {...props}
                    onKeyPress={onKeyPress}
                    onChange={onChangeEvent}
                    onBlur={onBlur}
                    id={props.id}
                />
                {getIcon('right', props.icon)}
            </>
        </Styled>
    )
}

InputIcon.defaultProps = {
    classNameContainer: 'input-icon',
    className: 'form-control',
    type: 'text'
}

export default InputIcon
