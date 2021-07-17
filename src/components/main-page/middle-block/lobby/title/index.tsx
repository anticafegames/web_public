import React from 'react'

const getDeclinationRoomName = (length: number) => {

    if (length % 100 >= 11 && length % 100 <= 19) {
        return 'комнат'
    }

    switch (length % 10) {

        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return 'комнат'

        case 1:
            return 'комната'

        case 2:
        case 3:
        case 4:
            return 'комнаты'
    }

    return 'комнат'
}

interface iProps {
    length: number
}

const Title: React.FC<iProps> = ({ length }) => {

    return (
        <div className={`block-title ${length == 0 ? 'empty-room' : ''}`}>
            <div className='lobby'>
                <span>Лобби</span>
                {length != 0 && <span className='length'>{length} {getDeclinationRoomName(length)}</span>}
            </div>
        </div>
    )
}

export default Title