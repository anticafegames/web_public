import React, { Component, Fragment } from 'react'

import Textarea from './textarea'

interface iErrorTextarea {
    id: string,
    icon?: string,
    name?: string,
    placeholder?: string,
    className?: string,
    type?: string,
    classNameTextareaContainer?: string,
    classNameErrorTexareaConteiner?: string
    input: any,
    meta: any
}

class ErrorTextarea extends Component<iErrorTextarea> {

    public static defaultProps: Partial<iErrorTextarea> = {
        classNameTextareaContainer: 'input-field',
        classNameErrorTexareaConteiner: 'col s12',
        className: 'materialize-textarea'
    }

    render() {

        const {
            classNameTextareaContainer,
            classNameErrorTexareaConteiner,
            input,
            meta: { error, touched },
            ...rest
        } = this.props

        return (
            <div className={`textarea-error-holder ${classNameErrorTexareaConteiner}`}>
                <Textarea {...rest} {...input} classNameContainer={`${classNameTextareaContainer} ${touched && error ? 'textarea-error-active' : ''}`} />
                <div className='error-holder'>
                    {touched && error && <label className='error'>{error}</label>}
                </div>
            </div>
        )
    }
}

export default ErrorTextarea
