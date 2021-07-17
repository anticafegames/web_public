import React from 'react'

import DropdownList, { iDropdownItemListProps, DropdownItemList } from './dropdown-items-list'
import { iDropdownItemProps } from './dropdown-item'

declare var window: any
declare const M: any

interface iDropdownProps {
    className?: string
    items: iDropdownItemProps[]
}

interface iDropdownState {
    idPostfix: number
}

export class Dropdown extends React.Component<iDropdownProps> {

    state: iDropdownState

    constructor(props: iDropdownProps) {
        super(props)

        window['dropdown-id-postfix'] = window['dropdown-id-postfix'] || 0

        this.state = {
            idPostfix: window['dropdown-id-postfix']++
        }
    }

    componentDidMount() {
        const elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems[0], {})
    }

    render() {

        const { className, items, children } = this.props
        const { idPostfix } = this.state

        return (
            <>
                <DropdownItemList idPostfix={idPostfix} items={items} />
                <a id={`dropdown-trigger${idPostfix}`} className={`dropdown-trigger ${className}`} href='#!' data-target={`dropdown${this.state.idPostfix}`} onClick={this.onClick} >{children}</a>
            </>
        )
    }

    onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        return false
    }
}

export default Dropdown

export type iDropdownItem = iDropdownItemProps