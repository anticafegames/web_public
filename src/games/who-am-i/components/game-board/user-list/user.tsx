import React from 'react'
import { iGameUser } from '../../../../../core/games/who-am-i/ducks/entity/game-user-entity'
import { iRoomPeer } from '../../../../../core/ducks/webrtc-room/entity/room-peer-entity'

import UserImg from '../../../../../components/common/img/user-img'
import { yandexSearchLink } from '../../../../../core/config/vk-config'
import Icon from '../../../../../components/common/materialize/icon'
import Dropdown from '../../../../../components/common/controls/dropdown-actions'

interface iProps {
    gameUser: iGameUser
}

const openYandexSearch = (gameUser: iGameUser) => {
    if (gameUser.nameFilled) {
        const link = yandexSearchLink(gameUser.name)
        window.open(link, '_blank')
    }
}

const User: React.FC<iProps> = ({ gameUser }) => {

    const user: iRoomPeer = gameUser.user as any

    const menu = []

    if(gameUser.name) {
        menu.push({ action: () => openYandexSearch(gameUser), text: 'Найти имя героя' })
    }

    return (
        <div className='user' title={`${user.first_name} ${user.last_name}`}>
            <UserImg link={user.profilePhoto} size='user-img-s' />
            <div className='user-collection-content'>
                <div>
                    <span className='number'>Игрок {gameUser.ordernum} - {gameUser.itIsMe ? 'Вы' : user.first_name}</span>
                </div>

                {!gameUser.itIsMe && <div className='name-container' title={gameUser.name ? 'Открыть в поиске' : 'Герой ещё не выбран'} >
                    {gameUser.name ? <span className='name filled' onClick={() => openYandexSearch(gameUser)} title='Открыть в поиске' >Герой: {gameUser.name}</span> :
                        <span className='name'>Герой не выбран</span>
                    }

                </div>}

                {gameUser.itIsMe && <div>
                    <span className='name'>{gameUser.nameFilled ? 'Вам выбрали героя' : 'Вам не выбрали героя'}</span>
                </div>}

            </div>

            {!!menu.length && !gameUser.itIsMe && <Dropdown actions={menu}>
                <Icon iconKey='more_vert' className='more-button hover-scale' />
            </Dropdown>}
            
        </div>
    )
}

export default User
