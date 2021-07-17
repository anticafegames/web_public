import styled from 'styled-components'

export default styled.div`

display: flex;
height: calc(100vh - 50px);

.video-part {
    flex-grow: 1;
}


@media only screen and (max-width: 1220px) {

    flex-direction: column;

}

`