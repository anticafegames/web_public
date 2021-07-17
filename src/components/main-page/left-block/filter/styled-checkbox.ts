import styled from 'styled-components'

import Checkbox from '../../../common/controls/checkbox/styled'

export default styled(Checkbox)`

[type="checkbox"]+span:not(.lever):before {
    border: 2px solid #f1f1f1;
}

[type="checkbox"]:checked+span:not(.lever):before {
    border-right: 2px solid #f1f1f1;
    border-bottom: 2px solid #f1f1f1;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
}

span {
    color: #f1f1f1;
}

`