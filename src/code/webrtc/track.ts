export const listenOnTrack = (connection: RTCPeerConnection, emit: any) => {

    connection.ontrack = (event: any) => emit(event.streams[0])
    return () => { connection.ontrack = null }
}

export const addTrack =  (connection: RTCPeerConnection, localStream: MediaStream) => { localStream.getTracks().forEach((track: MediaStreamTrack) => connection.addTrack(track, localStream)) }
