import React from 'react'
import { useDispatch } from 'react-redux'

import { iGameUser } from '../../../../core/games/who-am-i/ducks/entity/game-user-entity'
import { yandexSearchLink } from '../../../../core/config/vk-config'
import { showName } from '../../../../core/games/who-am-i/ducks'

import Icon from '../../../../components/common/materialize/icon'

interface iProps {
    gameUser: iGameUser
    hover: boolean
}

const GameInfoContainer: React.FC<iProps> = ({ gameUser, hover }) => {

    const dispatch = useDispatch()

    const openYandexSearch = () => {
        const link = yandexSearchLink(gameUser.name)
        window.open(link, '_blank')
    }

    const onClickShowName = () => {
        if (!gameUser.userSeesName) {
            dispatch(showName(gameUser.user!.id))
        }
    }

    return (
        <>
            {(!gameUser.itIsMe || gameUser.userSeesName) && <div className='name-container' title={gameUser.name} onClick={openYandexSearch}>
                {gameUser.name}
            </div>}
            {(!gameUser.itIsMe && (hover || gameUser.userSeesName)) &&
                <div
                    className='show-name-button-container'
                    title={gameUser.userSeesName ? 'Игрок видит героя' : 'Показать игроку героя'}
                    onClick={onClickShowName}
                >
                    <Icon iconKey='visibility' className='icon' />
                </div>}
            <div className='number-container'>
                {gameUser.ordernum}
            </div>
        </>
    )
}

export default GameInfoContainer