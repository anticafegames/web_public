import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { packsSelector, packsLoadingSelector, loadPacks } from '../../../../../../core/games/crocodile/ducks'

import Styled from './styled'
import SettingsContent from './settings-content'
import Button from '../../../../../../components/common/controls/buttons/button'

interface iProps {
    closeTab: () => void
}

const Settings: React.FC<iProps> = ({ closeTab }) => {

    return (
        <>
            <Styled className='modal-content'>
                <SettingsContent/>
            </Styled>
            <div className='modal-footer'>
                <Button onClick={closeTab}>Назад</Button>
            </div>
        </>
    )
}

export default Settings
