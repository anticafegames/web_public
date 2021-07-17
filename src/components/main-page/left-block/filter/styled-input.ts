import styled from 'styled-components'

import { DefaultStyled } from '../../../common/controls/input-icon/styled'

export default styled(DefaultStyled)`

input:not(.browser-default):not([readonly]) {

    border-bottom: 1px solid #f1f1f1;
    color: #f1f1f1;

    &:focus {
        border-bottom: 1px solid #487545;
        box-shadow: 0 1px 0 0 #487545;
    }

    ::-webkit-input-placeholder { /* Chrome */
        color: #f1f1f1;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #f1f1f1;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #f1f1f1;
        opacity: 1;
    }
    :-moz-placeholder { /* Firefox 4 - 18 */
        color: #f1f1f1;
        opacity: 1;
    }
}

`