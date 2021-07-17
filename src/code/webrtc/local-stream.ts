import { streamConstraints } from '../../core/code/webrtc/local-stream'

export const createLocalStream = async () => {
    
    const constraints = await streamConstraints()
    const stream = await navigator.mediaDevices.getUserMedia(constraints)

    return stream
}