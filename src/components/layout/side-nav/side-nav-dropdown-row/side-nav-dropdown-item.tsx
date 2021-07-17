import React from 'react'

import Row from '../side-nav-row'

export interface iDropdownItemProps {
    text: string,
    action: () => void
}

const SideNavdropdownItem: React.FC<iDropdownItemProps> = ({ text, action }) => {

    return (
        <Row center isLink action={action} classNameRow='dropdown-item'>
            <span className='nowrap-span'>{text}</span>
        </Row>
    )
}

export default SideNavdropdownItem
