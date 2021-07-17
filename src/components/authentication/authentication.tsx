import React, { Component, Fragment } from 'react'
import { reduxForm, Field, InjectedFormProps, FormErrors } from 'redux-form'
import { NavLink } from 'react-router-dom'

import ErrorInput from '../common/controls/error-input'
import Checkbox from '../common/controls/checkbox'

interface iAuthentictionFormProps {
    handleSubmit: (event: React.FormEvent) => void
}

interface iAuthentictionFormValidateErrors {
    email: string
    password: string
}

class Authentiction extends Component<iAuthentictionFormProps & InjectedFormProps> {

    render() {
        return (
            <form className='login-form' onSubmit={this.props.handleSubmit}>
                <div className='form-group'>
                    <Field icon='lni-envelope' name='email' id='email' placeholder='Почтовый ящик' component={ErrorInput} />
                </div>
                <div className='form-group'>
                    <Field icon='lni-lock' id='password' name='password' type='password' placeholder='Пароль' component={ErrorInput} />
                </div>
                <div className='form-group form-group__checlbox-holder'>
                    <Checkbox id='checkedall' label='Запомнить меня'/>
                    <NavLink to='/authentication/forgot-password' className='forgetpassword'>Востановить пароль?</NavLink>
                </div>
                <div className='text-center'>
                    <button className='btn btn-common log-btn'>Войти</button>
                </div>
            </form>
        )
    }
}

const validate = ({email, password}: any) => {

    let errors: FormErrors<iAuthentictionFormValidateErrors> = {}

    if (!email) errors.email = 'Укажите почтовый ящик'

    if (!password) errors.password = 'Укажите пароль'

    return errors
}

/*export default reduxForm({
    form: 'authentiction',
    validate
})(Authentiction)*/
