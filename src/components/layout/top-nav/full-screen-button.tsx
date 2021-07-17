import React from 'react'
import Icon from '../../common/materialize/icon'

const FullScreenButton: React.FC = props => {

    const onClick = () => {

        if (document.fullscreenElement) {
            document.exitFullscreen()
        }
        else {
            document.documentElement.requestFullscreen();
        }
    }

    return (
        <div className='chat-button hover-scale' onClick={onClick}>
            <Icon iconKey='crop_free' title='На весь экран' />
        </div>
    )
}

export default FullScreenButton