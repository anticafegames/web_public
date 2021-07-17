import React from 'react'

import SettingsPage from '../../components/settings'

interface iProps {
    closeModal: () => void
}

const Settings: React.FC<iProps> = ({ closeModal }) => {

    return (
        <SettingsPage closeModal={closeModal} />
    )
}

export default Settings
