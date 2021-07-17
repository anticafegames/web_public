import React from 'react'
import { reduxForm, Field, InjectedFormProps, FormErrors } from 'redux-form'

import { iJoinRoomParams } from '../../../core/ducks/webrtc-room/entity/interface'

import ErrorInput from '../../common/controls/error-input'


interface iProps {
    knockOnRoom: () => void
    closeModal: () => void
}

interface iRoomConnectFormValidateErrors {
    password?: string
}

const RoomJoinForm: React.FC<iProps & InjectedFormProps<any, iProps>> = ({ handleSubmit, knockOnRoom, closeModal }) => {

    return (
        <form className='room-join-form' onSubmit={handleSubmit}>
            <div className='modal-content'>
                <div className='form-group passort'>
                    <Field icon='lni-envelope' name='password' id='password' type='password' placeholder='Введите пароль' component={ErrorInput} />
                </div>
            </div>
            <div className='modal-footer'>
                <span className='btn btn-common log-btn' onClick={knockOnRoom}>Постучаться</span>
                <button className='btn btn-common log-btn'>Войти</button>
                <span className='btn btn-common log-btn' onClick={closeModal}>Закрыть</span>
            </div>
        </form>
    )
}

const validate = ({ password }: iRoomConnectFormValidateErrors) => {

    let errors: FormErrors<iRoomConnectFormValidateErrors, string> = {}

    password = password && password.trim()

    if (!password) {
        errors.password = 'Укажите пароль'
    }
    
    return errors as FormErrors<any, string>
}

export default reduxForm<any, iProps>({
    form: 'roomJoin',
    validate
})(RoomJoinForm)
