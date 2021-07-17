import styled from 'styled-components'

export default styled.div`

    .side-nav-content {

        position: fixed;

        height: calc(100vh - 50px);
        background-color: #E5E5E5;
        border-right: 1px solid #C1BDBD;
        position: fixed;
        top: 50px;
        z-index: 1000;
        display: flex;

        color: #000000;
        font-size: 15px;

        .side-nav-row {

            width: 300px;
            display: flex;
            flex-wrap: nowrap;
            min-height: 50px;

            align-items: center;
            justify-content: center; 

            .side-nav-row_icon {

                &.unvisible {
                    opacity: 0;
                }

                width: 32px;
                height: 32px;
                margin-left: 15px;

                background-color: #FFFFFF;
                border-radius: 10px;

                display: flex;
                flex-shrink: 0;

                .material-icons {
                    margin: auto;
                    color: #4F4949;
                }

                &.link-icon {
                    cursor: pointer;
                }
            }

            .side-nav-row_content {

                display: flex;
                flex-grow: 1;
                width: 100%;
                justify-content: space-between;
                padding-left: 15px;
                padding-right: 20px;

                &.center {
                    margin: auto;
                }

                display: flex;
            }

            &.link {

                cursor: pointer;

                &:hover {
                    background-color: #40923A;
                    color: #fff;
                }
            }

            &.dropdown-item {

                .side-nav-row_content {

                    padding-left: 20px;
                }
            }
        }

        .side-nav-blocks {
            width: 100%;
            height: calc(100% - 20px);
            margin-top: 20px;
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    .side-nav-holder {
        width: 50px;
        min-height: calc(100vh - 50px);
    }

`