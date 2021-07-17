import React, { Component, Fragment, useState, useEffect, useMemo } from 'react'

import Styled, { iProps as iStyledProps } from './styled'
import Action from './action'
import Animated from './animated-dropdown'

type iOpenState = 'open' | 'close'

export interface iManualOpenParams {
    open: iOpenState,
    autoClose: boolean
    onChangeOpenState: (open: boolean) => void
}

export interface iAction {
    action: () => void,
    text?: string,
    render?: (close: () => void) => JSX.Element
}
export interface iProps {
    actions: iAction[]
    children: JSX.Element
    position?: iStyledProps
    manualOpenParams?: iManualOpenParams
}

const DropdownActions: React.FC<iProps> = ({ actions, position, manualOpenParams, children }) => {

    const [isOpen, open] = useState(false)

    const listener = () => {
        window.document.removeEventListener('click', listener)
        open(false)
    }

    const onClickOpen = (event: React.MouseEvent) => {

        const eventTrigger = new Event('close-dropdown')
        window.dispatchEvent(eventTrigger)

        event.preventDefault()
        event.stopPropagation()
        
        if (isOpen) {
            window.document.removeEventListener('click', listener)
            open(false)
        } else {
            window.document.addEventListener('click', listener)
            setTimeout(() => open(true))
        }
    }

    useEffect(() => {
        window.addEventListener('close-dropdown', listener)
        return () => {
            window.removeEventListener('close-dropdown', listener)
            window.document.removeEventListener('click', listener)
        }
    }, [])

    useEffect(() => {

        if(!manualOpenParams) return
        
        if (manualOpenParams.open === 'close') {
            window.document.removeEventListener('click', listener)
            open(false)
        } else {

            if(manualOpenParams!.autoClose) {
                window.document.addEventListener('click', listener)
            }
            setTimeout(() => open(true))
        }

    }, [manualOpenParams && manualOpenParams.open])

    useEffect(() => {

        if(manualOpenParams) {
            manualOpenParams!.onChangeOpenState(isOpen)
        }

    }, [isOpen])

    return (
        <Styled onClick={!manualOpenParams ? onClickOpen : undefined} {...position} className='dropdown-actions'>
            <div className='dropdown-actions-content'>
                {children}
            </div>
            <Animated open={isOpen}>
                {
                    actions.map((action, index) => <Action key={action.text || index} {...action} close={listener} />)
                }
            </Animated>
        </Styled>
    )
}

DropdownActions.defaultProps = {
    position: {}
}

export default DropdownActions
