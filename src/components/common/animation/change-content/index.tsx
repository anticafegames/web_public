import React, { useState, useEffect, useMemo } from 'react'
import { Motion, OpaqueConfig, PlainStyle, spring, Style } from 'react-motion'

import Wrapper from './wrapper'

export type iAnimationState = 'init' | 'preparestartstyle' | 'startlastoff' | 'stoplastoff' | 'startnewon' | 'stop'

interface iContent {
    key: string,
    content: JSX.Element
}

interface iProps {
    children: iContent
}

const ChangeContent: React.FC<iProps> = ({ children }) => {

    const [lastContent, setLastContent] = useState<iContent | null>(null)
    const [content, setContent] = useState<iContent>(children)

    const [style, changeStyle] = useState<Style>({ opacity: 100, left: 0 })
    const [animationState, changeAnimationState] = useState<iAnimationState>('init')

    useEffect(() => {

        switch (animationState) {

            case 'preparestartstyle':
                changeStyle({ opacity: 100, left: 0 })
                changeAnimationState('startlastoff')
                break

            case 'startlastoff':
                if (!style.opacity || (style.opacity as OpaqueConfig).val != 50) {
                    changeStyle({ 
                        opacity: spring(50, { damping: 50, stiffness: 600, precision: 0.1 }),
                        left: spring(100, { damping: 50, stiffness: 600, precision: 1 })
                     })
                }
                break

            case 'stoplastoff':
                changeAnimationState('startnewon')
                break

            case 'startnewon':

                if (!style.opacity || (style.opacity as OpaqueConfig).val != 100) {
                    changeStyle({ 
                        opacity: spring(100, { damping: 50, stiffness: 600 }),
                        left: 100
                     })
                }
                break

            case 'stop':
                changeStyle({ opacity: 100, left: 0 })
                break
        }

    }, [animationState])

    useEffect(() => {

        if (content.key !== children.key) {

            changeAnimationState('preparestartstyle')
            setLastContent(content)
            setContent(children)

        }

    }, [children])

    return (
        <Motion

            onRest={() => {

                switch (animationState) {

                    case 'startlastoff':
                        changeAnimationState('stoplastoff')
                        setLastContent(null)
                        break

                    case 'startnewon':
                        changeAnimationState('stop')
                        break

                }

            }}



            defaultStyle={{ opacity: 100 }}
            style={style}
        >
            {
                config => <Wrapper config={config} lastContent={lastContent && lastContent!.content} content={content.content} animationState={animationState} />
            }
        </Motion>
    )
}

export default ChangeContent