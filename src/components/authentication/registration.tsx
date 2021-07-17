import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { reduxForm, Field, FormErrors, InjectedFormProps } from 'redux-form'

import ErrorInput from '../common/controls/error-input'
import ErrorCheckbox from '../common/controls/error-checkbox'
import ErrorReCAPTCHA from '../common/controls/error-recaptcha'

interface iRegistrationFormProps {
    handleSubmit: (event: React.FormEvent) => void
}

interface iRegistrationFormValidateErrors {
    firstname:string
    lastname: string
    email: string
    password: string
    passwordRetype: string
    terms: string
    recaptcha: string
}

class Registration extends Component<iRegistrationFormProps & InjectedFormProps> {

    constructor(props: iRegistrationFormProps & InjectedFormProps) {
        super(props)

        this.onChangeReCaptcha = this.onChangeReCaptcha.bind(this)
    }

    onChangeReCaptcha(value: any) {
        console.log(value)
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <Field icon='lni-user' id='firstname' name='firstname' placeholder='Имя' component={ErrorInput} />
                </div>
                <div className="form-group">
                    <Field icon='lni-envelope' id='lastname' name='lastname' placeholder='Фамилия' component={ErrorInput} />
                </div>
                <div className="form-group">
                    <Field icon='lni-envelope' id='email' name='email' placeholder='Почтовый ящик' component={ErrorInput} />
                </div>
                <div className="form-group">
                    <Field icon='lni-lock' id='password' name='password' type='password' placeholder='Пароль' component={ErrorInput} />
                </div>
                <div className="form-group">
                    <Field icon='lni-lock' id='passwordRetype' name='passwordRetype' type='password' placeholder='Повторите пароль' component={ErrorInput} />
                </div>
                <div className="form-group form-group__checlbox-holder">
                    <Field id='terms' name='terms' label='Вы соглашаетесь с правилами пользования сервиса' component={ErrorCheckbox} />
                </div>
                <div className="form-group captcha-holder">
                    <Field id='recaptcha' name='recaptcha'  component={ErrorReCAPTCHA} />
                </div>
                <div className="text-center">
                    <button className="btn btn-common log-btn">Зарегистрироваться</button>
                </div>
            </form>
        )
    }
}

const validate = ({firstname, lastname, email, password, passwordRetype, terms, recaptcha}: any) => {

    const errors: FormErrors<iRegistrationFormValidateErrors> = {}
    
    if (!firstname) errors.firstname = 'Укажите имя'

    if (!lastname) errors.lastname = 'Укажите фамилию'

    if (!email) errors.email = 'Укажите почтовый ящик'

    if (!password) errors.password = 'Укажите пароль'
    else if (password.length < 8) errors.password = 'Слишком короткий пароль'

    if (!passwordRetype) errors.passwordRetype = 'Повторите пароль'
    else if (passwordRetype !== password) errors.passwordRetype = 'Пароли не совпадают'

    if(!terms) errors.terms = 'Вы не согласились с правилами пользования'
    if(!recaptcha) errors.recaptcha = 'Подтвердите, что вы не робот'

    return errors
}

export default reduxForm<any, any, any>({
    form: 'registration',
    validate
})(Registration)