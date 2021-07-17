import React from 'react'

import SideNavRoom from './side-nav-room'
import SelectGameButton from './select-game-button'
import InfoButton from './info-button'
import SettingsButton from './settings-button'

interface iProps {}

const SideNav: React.FC<iProps> = () => {

    return (
            
        <div className='side-nav-blocks'>
            <div className='side-nav-top-links'>
                <SideNavRoom />
            </div>
            <div className='side-nav-top-bottom-links'>
                <SelectGameButton />
                <InfoButton />
                <SettingsButton />
            </div>
        </div>
    )
}

export default SideNav