import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { showPreloaderSelector, opacity100Selector } from '../../../../core/ducks/global-preloader'

import PreloaderStyle from './styled'
import Lottie from 'lottie-react'

const animation = require('../../animation/lottie-animations/preloader.json')

interface iProps {
    loading?: boolean
    opacity100?: boolean
}

type iAnimationState = 'wait-start' | 'start-process' | 'wait-complete-process' | 'can-stop'

const GlobalPreloader: React.FC<iProps> = props => {

    const showPreloader = useSelector(showPreloaderSelector)
    const opacity100 = useSelector(opacity100Selector)

    const [animationState, animationStateChange] = useState<iAnimationState>('wait-start')
    const [lastOpacityState] = useState(props.opacity100 || opacity100)

    useEffect(() => {

        if(animationState === 'wait-start' && showPreloader) {
            animationStateChange('wait-complete-process')
            setTimeout(() => animationStateChange('can-stop'), 2000)
        }

    }, [showPreloader, animationState])

    if(!showPreloader && (animationState == 'can-stop' || animationState == 'wait-start')) {
        if(animationState == 'can-stop') {
            animationStateChange('wait-start')
        }
        return null
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <PreloaderStyle opacity100={lastOpacityState}>
            <div className='animation-container'>
                <Lottie
                    {...defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </PreloaderStyle>
    )
}

export default GlobalPreloader