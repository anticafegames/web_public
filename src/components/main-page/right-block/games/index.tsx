import React from 'react'
import { useDispatch } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import GamesList from '../../../../core/games/games'
import { showElement } from '../../../../core/ducks/modal'
import { gameKey } from '../../../../core/ducks/games-common/entity/interface'

import Block from './styled'
import PreviewGameWindow from '../../../games/select-game/manuals/preview-game'


const Games: React.FC = props => {

    const dispatch = useDispatch()
    const games = GamesList.games

    const showPreview = (gameKey: gameKey) => dispatch(showElement(close => <PreviewGameWindow defaultGameKey={gameKey} closeModal={close} />, {}))

    return (
        <Block className='games'>
            <div className='block-title'>
                Игры
            </div>
            <div className='block-content'>
                <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} showArrows={false}> 
                    {
                        games.map(game =>

                            <div
                                className='game-preview-image'
                                title={game.gameName}
                                onClick={() => showPreview(game.gameKey)}
                                style={{ backgroundImage: `url(${game.manual.previewImage})` }}
                            />)
                    }
                </Carousel>
            </div>
        </Block>
    )
}

export default Games

/*<Slider auto={3000} hasBullets={true}>
                    {
                        games.map(game =>

                            <div
                                className='game-preview-image'
                                title={game.gameName}
                                onClick={() => showPreview(game.gameKey)}
                                style={{ backgroundImage: `url(${game.manual.previewImage})` }}
                            />)
                    }
                </Slider>*/