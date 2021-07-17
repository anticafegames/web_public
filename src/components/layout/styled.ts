import styled from 'styled-components'

export default styled.div`

display: flex;

.layout-content {
    width: calc(100% - 50px);
    padding: 25px;
    padding-top: 15px;
}

.chat-content {
    position: fixed;
    background-color: blue;
    width: 350px;
    height: 100vh;
    top: 50px;
    right: -350px;
    z-index: 1001;

    .chat-part {

        width: 350px;
        height: calc(100vh - 50px);
        background-color: white;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;

        .message-list {
            flex-grow: 1;
            list-style-type: none;

            border: none;
            border-bottom: 1px solid #e0e0e0;
            margin: 0;

            .collection-item {
                height: auto;
                min-height: auto;
            }
        }

        .send-message {

            height: 80px;
            display: flex;
            padding: 20px;

            .message-input {
                flex-grow: 1;
            }

            .send-button{
                margin: auto;
                cursor: pointer;
            }
        }

    }
}

@media only screen and (max-width: 1400px) { 
    .layout-content {
        width: 100%;
        padding: 0;
    }
}

`