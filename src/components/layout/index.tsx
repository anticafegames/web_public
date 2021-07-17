import React, { useState } from 'react'

import { OpenSideNavProvider } from './side-nav-provider'

import ContentStyled from './styled'
import AppInfoDiv from './app-info-div'
import TopNav from './top-nav'
import SideNav from './side-nav'
import Content from './content'

const Layout: React.FC = ({ children }) => {

    return (
        <AppInfoDiv>

            <OpenSideNavProvider>

                <TopNav />

                <ContentStyled>
                    <SideNav />
                    <Content>
                        {children}
                    </Content>
                </ContentStyled>

            </OpenSideNavProvider>

        </AppInfoDiv>
    )
}

export default Layout
