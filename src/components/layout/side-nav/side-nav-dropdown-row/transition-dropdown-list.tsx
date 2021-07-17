import React from 'react'

import Icon from '../../../common/materialize/icon'
import Row, { iProps as iSideNavRowProps } from '../side-nav-row'
import DropdownItem, { iDropdownItemProps } from './side-nav-dropdown-item'


interface iSideNavdropdownRowProps extends iSideNavRowProps {
    dropdownItems: iDropdownItemProps[]
}

export class SideNavdropdownRow extends React.Component<iSideNavdropdownRowProps> {

    render() {

        const { dropdownItems } = this.props

        return (
            <>
                <Row {...this.props} />

                {
                    dropdownItems.map(item => <DropdownItem {...item} />)
                }

            </>
        )
    }
}

export type iDropdownItem = iDropdownItemProps
export default SideNavdropdownRow
