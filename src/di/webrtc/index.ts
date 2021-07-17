import Track from '../../core/code/webrtc/track'
import { listenOnTrack, addTrack } from '../../code/webrtc/track'

import LocalStream from '../../core/code/webrtc/local-stream'
import { createLocalStream } from '../../code/webrtc/local-stream'

Track.listenOnTrack = listenOnTrack
Track.addTrack = addTrack

LocalStream.createLocalStream = createLocalStream