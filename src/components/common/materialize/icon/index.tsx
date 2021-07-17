import React from 'react'

interface iIconProps {
    iconKey: string
    className?: string
    title?: string
}

export class Icon extends React.Component<iIconProps> {

    render() {

        const { iconKey, className, title } = this.props

        return (
            <i className={`material-icons ${ className ? className : '' }`} title={title} >{iconKey}</i>
        )
    }
}

export default Icon
