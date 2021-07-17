import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { roomSelector } from '../../../../core/ducks/webrtc-room'
import { showElement } from '../../../../core/ducks/modal'
import { stopGame } from '../../../../core/ducks/games-common'
import { useOpenSideNav } from '../../side-nav-provider'

import SideNavRow from '../side-nav-row'
import SelectGameModal from '../../../games/select-game/manuals'

interface iProps {

}

const SelectGameButton: React.FC<iProps> = () => {

    const dispatch = useDispatch()
    const room = useSelector(roomSelector)

    const [openSideNav, sideNavToggleAction] = useOpenSideNav()

    const openSettingsModal = () => {
        dispatch(showElement(close => <SelectGameModal closeModal={close} />, { className: 'select-game-modal' }))
        
        if(openSideNav) {
            sideNavToggleAction()
        }
    }

    const stopGameClick = () => dispatch(stopGame())

    if(!room || !room.isOwner) {
        return null
    }

    if(room.status === 'game') {
        return (
            <SideNavRow iconKey='highlight_off' classNameRow='select-game' center isLink title='Остановить игру' action={stopGameClick} >
                <span className='nowrap-span' >Остановить игру</span>
            </SideNavRow>
        )
    }

    return (
        <SideNavRow iconKey='videogame_asset' classNameRow='select-game' center isLink title='Выбрать игру' action={openSettingsModal} >
            <span className='nowrap-span' >Выбрать игру</span>
        </SideNavRow>
    )
}

export default SelectGameButton