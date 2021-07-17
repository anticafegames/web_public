import React, { Component, Fragment } from 'react'
import { reduxForm, Field, InjectedFormProps, FormErrors } from 'redux-form'
import { NavLink } from 'react-router-dom'

import ErrorInput from '../common/controls/error-input'
import ErrorReCAPTCHA from '../common/controls/error-recaptcha'

interface iForgotPasswordFormProps {
    handleSubmit: (event: React.FormEvent) => void
}

interface iForgotPasswordFormValidateErrors {
    email: string
    recaptcha: string
}

class ForgotPassword extends Component<iForgotPasswordFormProps & InjectedFormProps> {

    render() {
        return (
            <form className='login-form' onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <Field icon='lni-envelope' id='email' name='email' placeholder='Почтовый ящик' component={ErrorInput} />
                </div>
                <div className="form-group captcha-holder">
                    <Field id='recaptcha' name='recaptcha' component={ErrorReCAPTCHA} />
                </div>
                <div className="text-center">
                    <button className="btn btn-common log-btn">Отправить мне пароль</button>
                </div>
                <div className="form-group mt-4">
                    <ul className="form-links">
                        <li className="float-left"><NavLink to='/authentication/registration'>Создать аккаунт</NavLink></li>
                        <li className="float-right"><NavLink to='/authentication/'>Вернуться на страницу входа</NavLink></li>
                    </ul>
                </div>
            </form>
        )
    }
}

const validate = ({ email, recaptcha }: any) => {

    let errors: FormErrors<iForgotPasswordFormValidateErrors> = {}

    if (!email) errors.email = 'Укажите почтовый ящик'

    if (!recaptcha) errors.recaptcha = 'Подтвердите, что вы не робот'

    return errors
}

export default reduxForm<any, any, any>({
    form: 'forgot-password',
    validate
})(ForgotPassword)
