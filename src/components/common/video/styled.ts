import styled from 'styled-components'
import { iScreenSize } from '../../../code/context/window-params-context'
import getVideoSize from './calc-sizes'

export interface iProps {
    length: number
    index: number
    screenSize: iScreenSize
    width?: string
    height?: string
}

export default styled.div<iProps>`

background-color: black;

max-width: 450px;
max-height: 340px;
position: relative;
display: flex;
padding-bottom: 0;

overflow: hidden;
border: 0.5px solid #39444e;

video {
    height: 100%;
    margin: auto;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
}

.video-hover-menu-holder {

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .video-hover-menu {

        background-color: black;
        opacity: 0.7;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        color: #a3a3a3;

        &.unhover {
            background-color: inherit;
        }

        .video-hover-menu-header {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding: 7px;
            display: flex;

            .user-icon {
                cursor: pointer;
            }
        }

        .video-hover-menu-bottom {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 7px;
            display: flex;

            .mic-icon {
                cursor: pointer;
            }

            .volume {

                display: flex;

                .volume-icon {

                    margin: auto;
                    display: flex;
                    cursor: pointer;

                    .material-icons {
                        margin: auto;
                    }
                }

                .volume-range {
                    width: 70px;
                    margin-left: 5px;
                }
            }
        }
    }
}

${props => getVideoSize(props)}

/*@media only screen and (max-width: 1400px) and (orientation: portrait) {

.video-part {

    height: 100%;

    .video-list {

        margin: auto;
        padding: 0;
        height: 100%;
        align-content: center;


        .video-container {

            height: calc(100% / 3);
            width: 50%;
            flex-grow: 1;
            margin: 0;
            border-radius: 0;
            border: 0.5px solid black;

            video {
                max-width: 100%;
                max-height: 100%;
            }
        }

        &.peers-5 {
            .video-container-3 {
                width: 100%;
            }
        }

        &.peers-4 {

            .video-container-1,
            .video-container-4 {
                width: 100%;
            }
        }

        &.peers-3,
        &.peers-2,
        &.peers-1 {
            .video-container {
                width: 100%;
            }
        }

        &.peers-7 {
            .video-container {
                height: calc(100% / 4);

                &.video-container-3 {
                    width: 100%;
                }
            }
        }

        &.peers-8 {
            .video-container {
                height: calc(100% / 4);
            }
        }
    }
}
}

@media only screen and (max-width: 1400px) and (orientation: landscape) {

.video-part {

    height: 100%;

    .video-list {

        margin: auto;
        padding: 0;
        height: 100%;
        justify-content: center;
        align-content: center;

        .video-container {

            height: calc(100% / 2);
            width: calc(100% / 3);
            flex-grow: 1;
            margin: 0;
            border: 0.5px solid black;
            border-radius: 0;

            video {
                max-width: 100%;
                max-height: 100%;
            }
        }

        &.peers-5 {

            .video-container-5,
            .video-container-4 {
                width: calc(100% / 2);
            }
        }

        &.peers-4,
        &.peers-3 {
            .video-container {
                width: calc(100% / 2);
            }
        }

        &.peers-2,
        &.peers-1 {
            .video-container {
                width: calc(100% / 2);
                height: 100%;
            }
        }

        &.peers-7 {
            .video-container {
                width: calc(100% / 4);
            }
        }

        &.peers-8 {
            .video-container {
                width: calc(100% / 4);
            }
        }
    }
}
}*/

`