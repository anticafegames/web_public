import React, { Component, Fragment } from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'

import ErrorInput from '../controls/error-input'

interface iRoomConnectForm {
    handleSubmit: (event: React.FormEvent) => void
}

class RoomConnectForm extends Component<iRoomConnectForm & InjectedFormProps> {

    render() {
        return (
            <form className='login-form' onSubmit={this.props.handleSubmit}>
                <div className='form-group'>
                    <Field icon='lni-envelope' name='room' id='room' placeholder='Введите id комнаты' component={ErrorInput} />
                </div>
                <div className='text-center'>
                    <button className='btn btn-common log-btn'>Войти</button>
                </div>
            </form>
        )
    }
}

const validate = () => {
    
    const errors = {}

    return errors
}

export default reduxForm({
    form: 'roomConnect',
    validate
})(RoomConnectForm)
