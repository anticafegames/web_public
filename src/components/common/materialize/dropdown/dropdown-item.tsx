import React from 'react'
import { NavLink } from 'react-router-dom'

export interface iDropdownItemProps {
    to: string
    text?: string
    linkClassName?: string
    liClassName?: string
    action?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export class DropdownItem extends React.Component<iDropdownItemProps> {

    render() {

        const { to, action, text, linkClassName, liClassName } = this.props

        return (
            <li className={liClassName}>
                <NavLink onClick={action} className={linkClassName} to={to} title={text}>{text}</NavLink>
            </li>
        )
    }
}

export default DropdownItem
