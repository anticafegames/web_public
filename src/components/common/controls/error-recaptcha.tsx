import React, { Component, Fragment } from 'react'

import ReCaptcha from './recaptcha'

interface iErrorReCaptcha {
    input: any,
    meta: any
}

class ErrorReCaptcha extends Component<iErrorReCaptcha> {

    render() {

        const {
            input,
            meta: { error, touched },
            ...rest
        } = this.props

        return (
            <div className='recaptcha-error-holder'>
                <ReCaptcha onChange={this.props.input.onChange} />
                <div className='error-holder'>
                    {touched && error && <label className='error'>{error}</label>}
                </div>
            </div>
        )
    }
}

export default ErrorReCaptcha
