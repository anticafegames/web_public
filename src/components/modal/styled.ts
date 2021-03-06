import styled from 'styled-components'

export default styled.div`



.modal-overlay {
    display: block;
    opacity: 0.5;
}

.modal {
    display: block;
    top: 100px;
    z-index: 999;
}

.modal-footer {
    .btn {
        margin: 6px 0 6px 5px;
    }
}


@media only screen and (max-width: 1400px) {


    .modal {
        top: auto;
        width: 100vw !important;
        max-width: 100vw !important;
        bottom: 0;
    }
}


//redirect-to-brouser 

&.redirect-to-brouser {

    .modal {

        opacity: 1;
        height: 100vh;
        width: 100%;
        max-height: 100vh;
        top: 0;
        z-index: 1000;

        .modal-content {
            display: flex;
            height: 100%;

            .message {
                text-align: center;
                margin: auto;
            }
        }
    }
}


`