import React from 'react'
import { useDispatch } from 'react-redux'

import { showElement } from '../../../../core/ducks/modal'
import { useOpenSideNav } from '../../side-nav-provider'

import SideNavRow from '../side-nav-row'
import InfoModal from '../../../../pages/modals/info'

interface iProps {

}

const InfoButton: React.FC<iProps> = () => {

    const dispatch = useDispatch()

    const [openSideNav, sideNavToggleAction] = useOpenSideNav()

    const openSettingsModal = () => {
        dispatch(showElement(close => <InfoModal closeModal={close} />, { className: 'info-modal' }))
        
        if(openSideNav) {
            sideNavToggleAction()
        }
    }

    return (
        <SideNavRow iconKey='info_outline' center isLink title='О нас' action={openSettingsModal} >
            <span className='nowrap-span' >О нас</span>
        </SideNavRow>
    )
}

export default InfoButton