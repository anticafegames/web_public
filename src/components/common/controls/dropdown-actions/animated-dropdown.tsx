import React from 'react'
import { Motion, spring } from 'react-motion'

import Scrollbar from '../../scrollbar/react-custom-scrollbars'

interface iProps {
    open: boolean
    children: JSX.Element[]
}

const AnimatedDropdown: React.FC<iProps> = ({ open, children }) => {

    if (!open) {
        return null
    }
    
    return (
        <Motion defaultStyle={{ value: 30 }} style={{ value: spring(100, { damping: 50, stiffness: 800, precision: 1 }) }}>
            {
                config =>
                    <ul className='dropdown-content' style={{ transform: `scale(${config.value / 100})` }}>
                        <Scrollbar style={{ height: children.length * 50, maxHeight: 300 }}  >
                            {children}
                        </Scrollbar>
                    </ul>
            }
        </Motion>
    )
}

export default AnimatedDropdown
