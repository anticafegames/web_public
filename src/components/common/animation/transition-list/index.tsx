import React from 'react'
import { TransitionMotion, TransitionStyle, PlainStyle, spring, SpringHelperConfig, TransitionPlainStyle } from 'react-motion'

interface iSpringAnimation {
    value: number
    config?: SpringHelperConfig
}

interface iAnimation {
    key: string
    defaultValue: number | iSpringAnimation
    enterValue: number
    leaveValue: number | iSpringAnimation
}

interface iProps {
    items: any[]
    animations: iAnimation[]
    children: (config: TransitionStyle[]) => JSX.Element
    findKey?: (item: any) => string 
    prepareConfig?: (config: TransitionPlainStyle[]) => TransitionPlainStyle[]
}

const TransitionList: React.FC<iProps> = ({ items, animations, children, findKey, prepareConfig }) => {

    const willLeave = () => { const y =animations.reduce((styles: any, animation) => { 
        styles[animation.key] = typeof animation.leaveValue === 'number' ? animation.leaveValue : spring(animation.leaveValue.value, animation.leaveValue.config)
        return styles
    }, {})
    console.log('leave', y)
    return y
}

    const willEnter = () => { const y = animations.reduce((styles: any, animation) => {
        styles[animation.key] = typeof animation.enterValue
        return styles
    }, {})
    console.log('enter', y)
    return y
}
    
    const defaultStyle = animations.reduce((styles: any, animation) => { 
        styles[animation.key] = typeof animation.defaultValue === 'number' ? animation.defaultValue : spring(animation.defaultValue.value, animation.defaultValue.config)
        return styles
    }, {})

    return (
        <TransitionMotion
            willLeave={willLeave}
            willEnter={willEnter}
            styles={items.map(item => {

                const style: TransitionStyle = {
                    key: findKey!(item),
                    style: defaultStyle,
                    data: item
                }
                return style
            })}>
            {config => children(prepareConfig!(config))}
        </TransitionMotion>
    )
}

TransitionList.defaultProps = {
    findKey: item => item.id,
    prepareConfig: config => config
}

export default TransitionList
