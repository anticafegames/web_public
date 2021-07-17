import React, { createContext, useState, useContext } from 'react'

import { iShortRoom } from '../../core/ducks/webrtc-rooms/entity/rooms-entity'
import { iRoomPeer } from '../../core/ducks/webrtc-room/entity/room-peer-entity'

interface iFilter {
    isDefaultFilter: boolean
    roomId: string
    ownerName: string
    openRoom: boolean
}

let defaultFilter: iFilter = {
    isDefaultFilter: true,
    roomId: '',
    ownerName: '',
    openRoom: false
}

export interface iValueContext {
    filter: iFilter
    changeFilter?: (merge?: Partial<iFilter>) => void
}

const Context = createContext<iValueContext>({ filter: defaultFilter })

export const FilterProvider: React.FC = ({ children }) => {

    const [filter, changeFilterState] = useState(defaultFilter)

    const changeFilter = (merge?: Partial<iFilter>) => {

        if (merge) {

            let newFilter = { ...filter, isDefaultFilter: false }

            for (let key in merge) {
                newFilter[key as keyof iFilter] = merge[key as keyof iFilter] as never
            }

            changeFilterState(newFilter)

        } else {
            changeFilterState(defaultFilter)
        }
    }

    return <Context.Provider value={{ filter, changeFilter }}>{children}</Context.Provider>
}

export const useFilter = () => {
    const filter = useContext<iValueContext>(Context)
    return [filter.filter, filter.changeFilter] as [iFilter, (merge?: Partial<iFilter>) => void]
}

export const roomsFilter = (rooms: iShortRoom[], filter: iFilter) => {

    return rooms.filter(room => {

        if(filter.roomId && !room.id.toLowerCase().startsWith(filter.roomId.toLowerCase())) {
            return false
        }

        if(filter.ownerName && room.owner) {
            const owner = room.owner as iRoomPeer
            
            if(!owner.first_name.toLowerCase().startsWith(filter.ownerName.toLowerCase()) 
            && !owner.last_name.toLowerCase().startsWith(filter.ownerName.toLowerCase()) 
            && !owner.vkId.toString().startsWith(filter.ownerName)
            && !owner.nickname.toLowerCase().startsWith(filter.ownerName.toLowerCase())) {
                return false
            }
        }

        if(filter.openRoom && !room.openRoom) {
            return false
        }

        return true

    })

}
