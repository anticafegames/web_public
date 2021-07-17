import React from 'react'

import { Motion, spring } from 'react-motion'
import { useOpenSideNav } from '../side-nav-provider'

import Scrollbar from '../../common/scrollbar/react-custom-scrollbars'

interface iProps {}

const SideNavMotion: React.FC<iProps> = ({ children }) => {

    const [open] = useOpenSideNav()

    return (
        <Motion defaultStyle={{ width: 0 }} style={{ width: spring(open ? 300 : 0) }}>
            {interpolatingStyle =>
                <>
                    <div className='side-nav-holder' style={{ width: 0 }} />
                    <div className={`side-nav-content ${open ? 'open' : 'close'}`} style={{ width: interpolatingStyle.width }} >
                        <Scrollbar style={{ height: 'calc(100% - 50px)' }} autoHide={true} >
                            {children}
                        </Scrollbar>
                    </div>
                </>
            }
        </Motion>
    )
}

export default SideNavMotion
