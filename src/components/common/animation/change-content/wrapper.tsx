import React from 'react'
import { PlainStyle } from 'react-motion'
import { iAnimationState } from '.'

import WrapperStyled from './wrapper-styled'

interface iProps {
    config: PlainStyle,
    content: any,
    lastContent?: any,
    animationState: iAnimationState
}

const Wrapper: React.FC<iProps> = ({ config, content, lastContent, animationState }) => {

    let style: any = {}

    if(config.opacity !== undefined) {
        style.opacity = config.opacity / 100
    }

    let styleContent = { ...style }
    let styleLastContent = { ...style }

    styleContent.left = `-${100 - config.left}%`
    styleLastContent.left = `${config.left}%`

    if(animationState === 'init' || animationState === 'stop') {

        return (
            <WrapperStyled>{content}</WrapperStyled>
        )

    }

    return (
        <WrapperStyled className='animation'>
        
            <div className='content' style={styleContent}>
                {content}
            </div>

            {lastContent && <div className='last-content' style={styleLastContent}>
                {lastContent}
            </div>}
        
        </WrapperStyled>
    )
}

export default Wrapper