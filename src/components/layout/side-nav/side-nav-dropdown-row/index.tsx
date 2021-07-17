import React from 'react'

import Row, { iProps as iSideNavRowProps } from '../side-nav-row'
import DropdownItem, { iDropdownItemProps } from './side-nav-dropdown-item'


interface iProps extends iSideNavRowProps {
    dropdownItems: iDropdownItemProps[]
}

const SideNavdropdownRow: React.FC<iProps> = props => {

    const { dropdownItems } = props

    return (
        <>
            <Row {...props} />

            {
                dropdownItems.map(item => <DropdownItem {...item} />)
            }

        </>
    )
}

export type iDropdownItem = iDropdownItemProps
export default SideNavdropdownRow
