import React, { Component, Fragment } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { recaptchaKey } from '../../../core/config/app-config'

interface iReCaptcha {
    onChange: (token: string|null) => void
}

class ReCaptcha extends Component<iReCaptcha> {

    render() {
        return (
            <div className='captcha'>
                <ReCAPTCHA
                    sitekey={recaptchaKey}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default ReCaptcha