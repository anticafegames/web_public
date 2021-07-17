import React, { Component, Fragment } from 'react'

import InputIcon from './input-icon'

interface iErrorInput {
    id: string,
    icon?: string,
    name?: string,
    placeholder?: string,
    className?: string,
    type?: string,
    classNameInputContainer? : string
    classNameContainer?: string,
    input: any,
    meta: any,
    inputAttributes: React.InputHTMLAttributes<HTMLInputElement>
}

class ErrorInput extends Component<iErrorInput> {

    public static defaultProps: Partial<iErrorInput> = {
        classNameContainer: 'input-error-holder',
        classNameInputContainer: 'input-icon',
        className: 'form-control',
        type: 'text'
    }

    render() {

        const {
            classNameContainer,
            classNameInputContainer,
            inputAttributes,
            input,
            meta: { error, touched },
            ...rest
        } = this.props

        return (
            <div className={classNameContainer}>
                <InputIcon {...rest} {...input} inputAttributes={inputAttributes} classNameContainer={`${classNameInputContainer} ${touched && error ? 'input-error-active' : ''}`} />
                <div className='error-holder'>
                    {touched && error && <label className='error'>{error}</label>}
                </div>
            </div>
        )
    }
}

export default ErrorInput
