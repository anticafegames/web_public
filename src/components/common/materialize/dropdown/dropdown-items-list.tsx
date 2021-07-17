import React from 'react'

import DropdownItem, { iDropdownItemProps } from './dropdown-item'

export interface iDropdownItemListProps {
    idPostfix: number
    className?: string
    items: iDropdownItemProps[]
}

export class DropdownItemList extends React.Component<iDropdownItemListProps> {

    public static defaultProps: Partial<iDropdownItemListProps> = {
        className: 'dropdown-content'
    }

    render() {

        const { idPostfix, className, items } = this.props

        return (
            <>
                <ul id={`dropdown${idPostfix}`} className={className}>
                    {
                        items.map(item => <DropdownItem {...item} />)
                    }
                </ul>
            </>
        )
    }
}

export default DropdownItemList
