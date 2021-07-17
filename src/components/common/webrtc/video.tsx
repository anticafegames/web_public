import React from 'react'
import io from 'socket.io-client';

declare var location: any
declare var window: any

interface SocketVideoProps {
  srcObject?: MediaStream
}

export default class SocketVideo extends React.Component<SocketVideoProps> {

    videoRef: React.RefObject<HTMLVideoElement>

    constructor(props: any) {
        super(props)

        this.videoRef = React.createRef<HTMLVideoElement>()
    }

    componentDidMount() {
        this.videoRef.current!.srcObject = this.props.srcObject || null
    }

    componentDidUpdate() {
        this.videoRef.current!.srcObject = this.props.srcObject || null
    }

    render() {

        return (
            <>
                <video autoPlay={true} ref={this.videoRef} ></video>
            </>
        )
    }
}