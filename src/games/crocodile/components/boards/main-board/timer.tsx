import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { timerSelector } from '../../../../../core/games/crocodile/ducks'

const Timer: React.FC = () => {

    const timer = useSelector(timerSelector)

    return (

        <div>
            {timer}
        </div>

    )

}

export default Timer