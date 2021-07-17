import React, { useEffect } from 'react'
import { reduxForm, Field, InjectedFormProps, FormErrors } from 'redux-form'

import ErrorInput from '../../common/controls/error-input'
import ErrorCheckbox from '../../common/controls/error-checkbox'
import { iDebugRoomParams } from '../../../core/ducks/webrtc-room/entity/debug-room-params-entity'
import { iCreateFormResult } from '../../../core/ducks/webrtc-room/entity/room-reg-params-entity'

interface iProps {
    closeForm: () => void
    isDeveloper: boolean
    defaultParams: Partial<iCreateFormResult>
}

interface iRoomConnectFormValidateErrors {
    password?: string
    openRoom?: boolean
    hideRoomInSearch?: boolean
}

const RoomConnectForm: React.FC<iProps & InjectedFormProps<any, iProps>> = ({ handleSubmit, closeForm, isDeveloper, initialize, defaultParams }) => {

    useEffect(() => {
        initialize(defaultParams)
    }, [])

    return (
        <form className='create-room-form' onSubmit={handleSubmit}>
            <div className='modal-content'>
                <div className='form-group passort'>
                    <Field icon='lni-envelope' name='password' id='password' type='password' placeholder='Введите пароль' component={ErrorInput} />
                    <Field label='Открытая комната' name='openRoom' id='openRoom' component={ErrorCheckbox} defaultChecked={!!defaultParams.openRoom} />
                    <Field label='Скрыть комнату в поиске' name='hideRoomInSearch' id='hideRoomInSearch' component={ErrorCheckbox} />

                    {isDeveloper && <Field label='Режим разработчика' name='debugMode' id='debugMode' component={ErrorCheckbox} defaultChecked={!!defaultParams.debugMode} />}
                    {isDeveloper && <Field label='Без WebRTC>' name='withoutWebRTC' id='withoutWebRTC' component={ErrorCheckbox} defaultChecked={!!defaultParams.withoutWebRTC} />}

                </div>
            </div>
            <div className='modal-footer'>
                <button className='btn btn-common log-btn'>Создать</button>
                <span className='btn btn-common log-btn' onClick={closeForm} >Закрыть</span>
            </div>
        </form>
    )
}

const validate = ({ password, openRoom, hideRoomInSearch }: iRoomConnectFormValidateErrors) => {
    
    let errors: FormErrors<iRoomConnectFormValidateErrors, string> = {}

    password = password && password.trim()

    if(!openRoom && !password) {
        errors.password = 'Укажите пароль'
    }

    return errors as FormErrors<any, string>
}

export default reduxForm<any, iProps>({
    form: 'createRoom',
    validate
})(RoomConnectForm)
