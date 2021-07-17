import React from 'react'

import Styled from './styled'
import Lottie from 'lottie-react'

const animation = require('../../animation/lottie-animations/preloader.json')
const animationHorizont = require('../../animation/lottie-animations/preloader-horizontal-area.json')
const animationVertical = require('../../animation/lottie-animations/preloader-vertical-area.json')

type iAnimationType = 'default' | 'horizont' | 'vertical'

const animations = {
    'default': animation,
    'horizont': animationHorizont,
    'vertical': animationVertical
}

interface iProps {
    animationKey?: iAnimationType
    loading?: boolean
}

const PreloaderArea: React.FC<iProps> = ({ loading, animationKey }) => {

    if (!loading) return null

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animations[animationKey!],
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Styled className='preloader'>
            <div className='animation-container'>
                <Lottie
                    {...defaultOptions}
                    height='100%'
                    width='100%'
                />
            </div>
        </Styled>
    )
}

PreloaderArea.defaultProps = {
    loading: true,
    animationKey: 'default'
}

export default PreloaderArea
