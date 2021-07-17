import React from 'react'
import { Motion, spring } from 'react-motion'

import Styled from './styled'
import { useOpenSideNav } from '../../side-nav-provider'

interface iProps {}

const SideNavToggleButton: React.FC<iProps> = () => {

    const [isOpen, toggle] = useOpenSideNav()

    return (
        <Motion defaultStyle={{ widthMiddle: 0, rotate: 0, translateX: 0, translateY: 0 }} style={{
            widthMiddle: spring(isOpen ? 0 : 20, { stiffness: 300, damping: 50, precision: 0.1 }),
            rotate: spring(isOpen ? 45 : 0),
            translateX: spring(isOpen ? 3 : 0),
            translateY: spring(isOpen ? 4 : 0)
        }}>
            {interpolatingStyle =>
                <Styled>
                    <div className={`toggle-menu ${isOpen ? 'open' : 'close'}`} onClick={toggle} >

                        <span className='line top-line'
                            style={{
                                transform: `rotate(${interpolatingStyle.rotate}deg) translate(${interpolatingStyle.translateX}px, ${interpolatingStyle.translateY}px)`
                            }}
                        />
                        
                        <span className='line middle-line' style={{ width: interpolatingStyle.widthMiddle }} />

                        <span className='line bottom-line'
                            style={{
                                transform: `rotate(-${interpolatingStyle.rotate}deg) translate(${interpolatingStyle.translateX}px, -${interpolatingStyle.translateY}px)`
                            }}
                        />

                    </div>
                </Styled>
            }
        </Motion>
    )
}

export default SideNavToggleButton