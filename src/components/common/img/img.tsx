import React from 'react'
import { StyledComponent } from 'styled-components'

interface iProps {
    link: string
    className: string
    title?: string
    styled?: StyledComponent<'div', any, {}, any>
}

const Img: React.FC<iProps> = ({ link, className, title, styled, children }) => {

    if(styled) {
        return React.createElement(styled, { style: { backgroundImage: `url('${link}')` }, className, title }, children)
    }

    return (
        <div style={{backgroundImage: `url('${link}')`}} className={className} title={title} >
            {children}
        </div>
    )
}

export default Img