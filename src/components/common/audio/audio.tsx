import React, { useEffect, useMemo, useRef, useState } from 'react'

interface iProps {
    stream: MediaStream
    setRef?: (ref: HTMLAudioElement) => void
}

const Audio: React.FC<iProps> = ({ stream, setRef }) => {

    const ref = useRef<HTMLAudioElement>(null)
    const [streamId, changeStreamId] = useState(stream && stream.id)

    useMemo(() => {debugger
        changeStreamId(stream && stream.id)
    }, [streamId == (stream && stream.id)])

    useEffect(() => {
        if(setRef) {
         setRef(ref.current!)
        }
    }, [])

    useEffect(() => {debugger
        ref.current!.srcObject = stream 
    }, [streamId])

    return (
        <audio autoPlay={true} ref={ref} muted={true}></audio>
    )
}

export default Audio