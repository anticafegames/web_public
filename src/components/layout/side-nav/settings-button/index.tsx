import React from 'react'
import { useDispatch } from 'react-redux'

import { showElement } from '../../../../core/ducks/modal'
import { useOpenSideNav } from '../../side-nav-provider'

import SideNavRow from '../side-nav-row'
import SettingsModal from '../../../../pages/modals/settings'

interface iProps {

}

const SettingsButton: React.FC<iProps> = () => {

    const dispatch = useDispatch()
    const [openSideNav, sideNavToggleAction] = useOpenSideNav()

    const openSettingsModal = () => {
        dispatch(showElement(close => <SettingsModal closeModal={close} />, { className: 'settings-modal' }))
        
        if(openSideNav) {
            sideNavToggleAction()
        }
    }

    return (
        <SideNavRow iconKey='settings' center isLink title='Настройки' action={openSettingsModal} >
            <span className='nowrap-span' >Настройки</span>
        </SideNavRow>
    )
}

export default SettingsButton