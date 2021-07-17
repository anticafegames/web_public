import React from 'react'
import { TransitionMotion, TransitionStyle, PlainStyle, spring } from 'react-motion'

import DropdownItem, { iDropdownItemProps } from './side-nav-dropdown-item'

interface iProps {
    dropdownItems: iDropdownItemProps[]
}

export class SideNavdropdownList extends React.Component<iProps> {

    render() {

        const { dropdownItems } = this.props

        return (
            <TransitionMotion
                willLeave={this.willLeave}
                willEnter={this.willEnter}
                styles={dropdownItems.map(item => {

                    const style: TransitionStyle = {
                        key: item.text,
                        style: { height: spring(50, { stiffness: 120, damping: 14 }), opacity: 1 },
                        data: item
                    }

                    return style
                })}>
                {config => 
                    <>
                        {config.map(item => <div style={{...item.style }}><DropdownItem {...item.data} /></div>)}
                    </>}
            </TransitionMotion>
        )
    }

    willLeave = () => ({ opacity: 0, height: spring(0) })
    willEnter = () => ({ opacity: 0, height: 20 })
}

export type iDropdownItem = iDropdownItemProps
export default SideNavdropdownList
