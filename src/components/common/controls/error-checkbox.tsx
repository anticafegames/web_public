import React, { Component, Fragment } from 'react'

import Checkbox from './checkbox'

interface iErrorCheckbox {
    id: string
    label: string,
    className?: string,
    labelClassName?: string,
    classNameContainer?: string,
    input: any,
    meta: any,
    inputAttributes: React.InputHTMLAttributes<HTMLInputElement>
    type?: string,
    defaultChecked?: boolean
    defaultValue?: boolean
}

class ErrorCheckbox extends Component<iErrorCheckbox> {

    public static defaultProps: Partial<iErrorCheckbox> = {
        classNameContainer: 'custom-control custom-checkbox',
        className: 'custom-control-input',
        labelClassName: 'custom-control-label'
    }

    render() {
        
        const {
            classNameContainer,
            input,
            meta: { error, touched },
            defaultChecked, defaultValue,
            ...rest
        } = this.props

        return (
            <Checkbox {...rest} defaultChecked={defaultChecked || defaultValue} {...input} classNameContainer={`${classNameContainer} ${touched && error ? 'checkbox-error-active' : ''}`} />
        )
    }
}

export default ErrorCheckbox
