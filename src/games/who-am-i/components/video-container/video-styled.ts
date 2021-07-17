import styled from 'styled-components'

import DefaultStyled from '../../../../components/common/video/styled'

export default styled(DefaultStyled)`

.video-hover-menu-holder {

    .name-container {

        position: absolute;
        padding: 0 6px 3px;
        right: 10px;
        bottom: 13px;
        border-radius: 50px;
        overflow: hidden;
        max-width: calc(100% - 50px);
        color: #a3a3a3;
        background-color: #212529;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .number-container {

        cursor: default;
        position: absolute;
        border-radius: 50px;
        color: #a3a3a3;
        background-color: #212529;
        bottom: 13px;
        left: 10px;
        padding: 1.5px 8px 2px;
    }

    .show-name-button-container {

        position: absolute;
        top: 10px;
        right: 15px;
        cursor: pointer;

        .icon {
            
            font-size: 30px;
        }
    } 
    
    .video-hover-menu-header {

        .menu-header-icon {

            z-index: 2;
        }
    }

    .video-hover-menu-bottom {

        width: calc(100% - 45px);
        right: 0;
        top: 0;
        bottom: auto;
        left: auto;

        .mic-icon {

            margin-top: 5px;
            margin-left: 45px;
        }

        .volume {

            height: 35px;
            margin-left: 45px;
        }
    }

}

`