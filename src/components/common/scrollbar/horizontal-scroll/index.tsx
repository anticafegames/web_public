import React, { useRef, useEffect, useMemo } from 'react'

import Styled from './styled'

interface iProps {

    style?: React.CSSProperties

}

interface iMoveData {
    mouseDown: boolean
    x?: number
}

const HorizontScroll: React.FC<iProps> = ({ children, style }) => {

    const scrollRef = useRef<HTMLDivElement>(null)
    const moveData: iMoveData = useMemo(() => ({ mouseDown: false }), [])
    
    const mouseup = () => {
        
        moveData.mouseDown = false
        moveData.x = undefined
    }

    const mousedown = (event: any) => {
        moveData.mouseDown = true
        moveData.x = event.clientX || event.changedTouches[0].clientX
    }

    const mousemove = (event: any) => {

        if(moveData.mouseDown && moveData.x && scrollRef.current) {
            const clientX = event.clientX || event.changedTouches[0].clientX
            scrollRef.current.scroll(scrollRef.current.scrollLeft + (moveData.x - clientX), 0)
            moveData.x = clientX
        }
    }

    useEffect(() => {

        window.addEventListener('mouseup', mouseup)
        window.addEventListener('touchend', mouseup)

        return () => { 
            window.removeEventListener('mouseup', mouseup)
            window.removeEventListener('touchend', mouseup)
        }

    }, [])

    return (

        <Styled 
        
            style={style}
            ref={scrollRef}

            onMouseDown={mousedown}
            onMouseMove={mousemove}

            onTouchStart={mousedown}
            onTouchMove={mousemove}
        >
            {children}
        </Styled>
    )
}

export default HorizontScroll