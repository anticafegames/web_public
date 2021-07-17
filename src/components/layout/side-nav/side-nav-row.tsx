import React from 'react'

import Icon from '../../common/materialize/icon'

export interface iProps {
    iconKey?: string
    center?: boolean
    isLink?: boolean
    action?: () => void
    linkAction?: () => void
    classNameRow?: string
    title?: string
}

const SideNavRow: React.FC<iProps> = ({ iconKey, center, isLink, children, classNameRow, title, action, linkAction }) => {

    const onClickRow = (event: React.MouseEvent) => {
        action!()
    }

    const onClickLink = (event: React.MouseEvent) => {

        if(linkAction) {
            event.stopPropagation()
            linkAction()
        }
    }

    return (
        <div className={`side-nav-row ${isLink && 'link'} ${classNameRow ? classNameRow : ''}`} onClick={action && onClickRow} >

            <div className={`side-nav-row_icon shadow-bottom ${!iconKey ? 'unvisible' : ''} ${linkAction ? 'link-icon' : '' }`} onClick={onClickLink} >
                {iconKey && <Icon iconKey={iconKey} title={title} />}
            </div>

            <div className={`side-nav-row_content ${center && 'center'}`}>
                {children}
            </div>

        </div>
    )
}

export default SideNavRow
