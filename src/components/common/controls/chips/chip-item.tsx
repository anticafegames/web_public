import React from 'react'

interface iProps {
    value: string
    deleteItem: () => void
}

const ChipItem: React.FC<iProps> = ({ value, deleteItem }) => {

    const onClickDeleteItem = (event: React.MouseEvent) => {
        deleteItem()
        event.preventDefault()
    }

    return (
        <div className='chip'>
            {value}
            <i className='material-icons close'
                onClick={onClickDeleteItem}>
                close
            </i>
        </div >
    )

}

export default ChipItem