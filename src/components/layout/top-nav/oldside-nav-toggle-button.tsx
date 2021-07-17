import React from 'react'

import Icon from '../../common/materialize/icon'

interface iProps {
    isOpen: boolean
    toggle: () => void
}

const SideNavToggle: React.FC<iProps> = ({ isOpen, toggle }) => {

    return (
        <div className='flex pointer toggle-menu' onClick={toggle} >
            <Icon iconKey='menu' />
        </div>
    )
}

export default SideNavToggle
