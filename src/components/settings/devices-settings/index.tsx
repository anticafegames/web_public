import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    audioInputDevicesSelector, videoInputDevicesSelector,
    selectedAudioInputDeviceIdSelector, selectedVideoInputDeviceIdSelector,
    streamSelector, loadedSelector, loadSettings, saveChangesAndClear, changeDevices
}
    from '../../../core/ducks/webrtc-devices'

import Preloader from '../../common/preloaders/preloader-area'
import Select from '../../common/controls/select'
import Video from '../../common/video/user-video/video'
import VideoStyled from './video-styled'

interface iProps {
    closeModal: () => void
}

const SettingsWebRTC: React.FC<iProps> = props => {

    const dispatch = useDispatch()

    const loaded = useSelector(loadedSelector)
    const stream = useSelector(streamSelector)

    const audioInputDevices = useSelector(audioInputDevicesSelector)
    const videoInputDevices = useSelector(videoInputDevicesSelector)

    const selectedAudioInputDeviceId = useSelector(selectedAudioInputDeviceIdSelector)
    const selectedVideoInputDeviceId = useSelector(selectedVideoInputDeviceIdSelector)

    useEffect(() => {
        dispatch(loadSettings())
        return () => {dispatch(saveChangesAndClear())}
    }, [])

        if (!loaded) {
            return <Preloader />
        }

        return (
            <>
                <div>
                    <Select label='Микрофон' defaultValue={selectedAudioInputDeviceId} options={audioInputDevices!.map(device => ({ value: device.deviceId, text: device.label }))} onChange={(value: string) => dispatch(changeDevices('audioinput', value))} />
                    <Select label='Камера' defaultValue={selectedVideoInputDeviceId} options={videoInputDevices!.map(device => ({ value: device.deviceId, text: device.label }))} onChange={(value: string) => dispatch(changeDevices('videoinput', value))} />
                </div>
                <VideoStyled>
                    <Video key='video-settings' stream={stream!} setRef={() => {}} />
                </VideoStyled>
            </>
        )
}

export default SettingsWebRTC