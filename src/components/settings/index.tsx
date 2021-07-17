import React, { useState } from 'react'

import SettingsWebRTCForm from './devices-settings'
import AddGameDataSettings from './add-game-data'

import Styled from './styled'

type iTabKey = 'devices' | 'add-words'

interface iTab {
    key: iTabKey,
    name: string,
    component: (closeModal: () => void) => any
}

interface iProps {
    closeModal: () => void,
    defaultTab?: iTabKey
}

const tabs: iTab[] = [
    {
        key: 'devices',
        name: 'устройства',
        component: (closeModal) => <SettingsWebRTCForm closeModal={closeModal} />
    },
    {
        key: 'add-words',
        name: 'добавить слова',
        component: (closeModal) => <AddGameDataSettings closeModal={closeModal} />
    }
]

const Settings: React.FC<iProps> = ({ defaultTab, closeModal }) => {

    const [currentTab, changeTab] = useState<iTab>(tabs.find(tab => tab.key === defaultTab)!)

    return (
            <>
                <Styled className='modal-content'>
                    {currentTab.component(closeModal)}
                </Styled>
                <div className='modal-footer'>
                    {
                        tabs
                        .filter(tab => tab.key !== currentTab.key)
                        .map(tab => <span className='btn btn-common log-btn' onClick={() => changeTab(tab)}>{tab.name}</span>)
                    }
                    <span className='btn btn-common log-btn' onClick={closeModal}>Закрыть</span>
                </div>
            </>
        )
}

Settings.defaultProps = {
    defaultTab: 'add-words'
}

export default Settings
