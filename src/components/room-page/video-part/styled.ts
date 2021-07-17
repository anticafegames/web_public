import styled from 'styled-components'

export default styled.div`

width: 100vw;
height: 100vh;
display: flex;


.video-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media only screen and (max-width: 1400px) {

    align-items: center;

    .video-list {
        justify-content: center;
    }

}

`