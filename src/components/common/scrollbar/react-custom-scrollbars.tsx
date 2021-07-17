import React, { Component, Fragment } from 'react'

const { Scrollbars } = require('react-custom-scrollbars')

export interface iProps {
    ref?: (node: any) => void
    onScroll?: (e: any) => void
    style?: React.CSSProperties 
    autoHide?: boolean
    autoHideDuration?: number
    height?: string | number
    width?: string | number
}

const Scrollbar: React.FC<iProps> = ({ children, ref, onScroll, style, autoHide, autoHideDuration, height, width }) => {

    return (
        <Scrollbars
            ref={ref}
            onScroll={onScroll}
            style={{ 
                ...style, 
                height: (style && style.height) || height,
                width: (style && style.width) || width
            }}
            autoHide={autoHide}
            autoHideDuration={autoHideDuration}
        >
            {children}
        </Scrollbars>
    )
}

Scrollbar.defaultProps = {
    height: '100%',
    width: '100%',
    autoHide: true
}

export default Scrollbar