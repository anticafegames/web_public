import React from 'react'

interface iSocketVideoProps {
    key: string
    stream: MediaStream
    setRef: (ref: HTMLVideoElement) => void
}

export default class SocketVideo extends React.Component<iSocketVideoProps> {

    videoRef: React.RefObject<HTMLVideoElement>

    constructor(props: any) {
        super(props)
        this.videoRef = React.createRef<HTMLVideoElement>()
    }

    componentDidMount() {
        this.videoRef.current!.srcObject = this.props.stream || null
        this.props.setRef(this.videoRef.current!)
        this.videoRef.current!.volume = 0.5
    }

    componentDidUpdate() {
        this.videoRef.current!.srcObject = this.props.stream || null
    }

    shouldComponentUpdate(nextProps: iSocketVideoProps) {
        return this.props.stream.id !== nextProps.stream.id
    }

    render() {
        return (
            <video autoPlay={true} ref={this.videoRef}></video>
        )
    }
}