import React from 'react'

import Styled from './styled'
import SideNavMotion from './side-nav-motion'
import SideNav from './side-nav'

interface iProps {}

const SideNavHolder: React.FC<iProps> = () => {

    return (
        <Styled>
            <SideNavMotion>
                <SideNav />
            </SideNavMotion>
        </Styled>
    )
}

export default SideNavHolder
