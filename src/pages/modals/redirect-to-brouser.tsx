import React from 'react'
import { useSelector } from 'react-redux'

import { hashSelector } from '../../core/ducks/router'
import { vkMiniAppLink } from '../../core/config/vk-config'


const RedirectToBrouser: React.FC = () => {

    const hash = useSelector(hashSelector)
    const redirect = `www.anticafegames.ru${hash}`

    return (
        <>
            <div className='modal-content'>
                <p className='message'>
                        Сервис не поддерживается в приложении.
                        <br />
                        Пожалуйста, перейдите в <a href={redirect} target='_blank'>браузерную версию</a>.
                    </p>
                
            </div>
        </>
    )

}

export default RedirectToBrouser
