import styled from 'styled-components'

export default styled.div`

.top-nav-holder {
    height: 50px;
}

nav {

    height: 50px;
    background-color: #40923A;

    position: fixed;
    top: 0;
    z-index: 1000;

    .top-nav {

        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

        .logo-holder {
            color: #F1F1F1;
            margin-left: 15px;
            font-size: 20px;
            letter-spacing: 2px;
        }

        .top-nav-links {
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            margin-right: 10px;
        }
        .top-nav-right-links {
            display: flex;

            .auth-button {
                margin-right: 15px;
            }

            .chat-button {
                margin-right: 20px;
                cursor: pointer;
            }

            .full-screen-button:hover {
                transform: scale(1.1);
            }
        }
    }
}

@media only screen and (max-width: 750px) {

    .vk-app:not(.fullscreen) .top-nav-right-links {
        padding-right: 70px;
    }
}
`