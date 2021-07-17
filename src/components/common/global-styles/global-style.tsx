import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body {
    background-color: #E5E5E5;
    height: 100vh;
    overflow: hidden;
}

.flex {
    display: flex;
}

.flex-grow {
    flex-grow: 1;
}

.user-img-s {
    width: 35px;
    height: 35px;
}

.responsive-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
}

.pointer {
    cursor: pointer;
}

.nowrap-span {
    white-space: nowrap;
}

.user-link {
    cursor: pointer;
    display: flex;

    span {
        margin: auto;
        margin-left: 15px;
        text-decoration: none;
        color: initial;
    }
}

.dropdown-content {
    min-width: 110px;
}

.shadow-bottom {
    box-shadow: 0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22);
}

.hover-scale:hover {
    transition: 300ms;
    transform: scale(1.1);
    cursor: pointer;
}

.block-title {

    width: 100%;

    margin-bottom: 7px;

    color: #000000;
    font-size: 1.64rem;
}

/*Controls*/

[type="checkbox"]:checked+span:not(.lever):before {
    border-right: 2px solid #40923A;
    border-bottom: 2px solid #40923A;
}


.btn, .btn-large, .btn-small {

    height: 40px;
    line-height: 40px;
    background-color: #40923A;

    &:hover {
        background-color: #487545;
    }
}

.dropdown-content li>a, .dropdown-content li>span {
    color: #487545;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.carousel-root {

    height: 100%;

    .slider-wrapper, .slider, .carousel {
        height: 100%;
    }
}

@media only screen and (max-width: 1300px)  {

    body {
        overflow: auto;
    }
}

`

