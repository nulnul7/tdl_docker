import React from 'react'
import DeleteIcon from '../assets/delete_icon.svg'
import UpdateIcon from '../assets/update_icon.svg'
import './listCard.css'

const ListCard = ({date, todo, priority}) => {
  return (
    <div className='listContainer'>
        <div className='icons'>
            < img src={ DeleteIcon } alt=""/>
            < img src={ UpdateIcon } alt=""/>
        </div>
        <div className='date'>{date}</div>
        <div className='todoList'>{todo}</div>
        <div>{priority ? "Penting" : "Not SO"}</div>
    </div>
  )
}

export default ListCard