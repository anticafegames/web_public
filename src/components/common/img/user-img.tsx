import React from 'react'

import Img from './img'
import Icon from '../materialize/icon'
import { StyledComponent } from 'styled-components'

type iUserImgSize = 'user-img-s'

interface iProps {
    link: string
    size: iUserImgSize
    className?: string
    title?: string
    styled?: StyledComponent<'div', any, {}, any>
}

const UserImg: React.FC<iProps> = ({ link, className, size, title, styled, children }) => {

    return (
        <Img link={link} className={`${className} ${size}`} title={title} styled={styled} >
            {children}
        </Img>
    )
}

UserImg.defaultProps = {
    className: 'responsive-img user-image',
}

export default UserImg