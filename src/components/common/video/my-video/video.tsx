import React, { useEffect, useMemo, useRef, useState } from 'react'

interface iProps {
    stream: MediaStream
    setRef: (ref: HTMLVideoElement) => void
}

const Video: React.FC<iProps> = ({ stream, setRef }) => {

    const ref = useRef<HTMLVideoElement>(null)
    const [streamId, changeStreamId] = useState(stream && stream.id)

    useMemo(() => {
        changeStreamId(stream && stream.id)
    }, [streamId == (stream && stream.id)])

    useEffect(() => {
        setRef(ref.current!)
    }, [])

    useEffect(() => {
        ref.current!.srcObject = stream 
    }, [streamId])

    return (
        <video autoPlay={true} ref={ref} muted={true}></video>
    )
}

export default Video