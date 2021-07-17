import React, { Component, Fragment } from 'react'

import { iAction } from '.'

interface iDropdownAntionsProps extends iAction {
    close: () => void
}

const Antion: React.FC<iDropdownAntionsProps> = ({ text, action, render, close }) => {

    const onClick = (event: React.MouseEvent) => {
        action()
        event.preventDefault()
    }

    const content = render ? render(close) : <span className='nowrap-span'>{text}</span>

    return (
        <li className='action' onClick={onClick}>
            {content}
        </li>
    )
}

export default Antion
