import React from 'react'
import DeleteIcon from '../assets/delete_icon.svg'
import UpdateIcon from '../assets/update_icon.svg'
import './listCard.css'

const ListCard = ({ date, todo, priority }) => {
  return (
    <div className='listContainer'>
      <div className='iconsList'>
        <div className='iconDel'  onClick={()=> console.log("delete")}>
          < img src={DeleteIcon} alt="delete"/>
          <div className='textInfo1'>Delete</div>
        </div>
        <div className='iconEdit' onClick={()=> console.log("edit")}>
          < img src={UpdateIcon} alt="edit"/>
          <div className='textInfo2'>Edit</div>
        </div>
      </div>
      <div className='date'>{date}</div>
      <div className='todoList'>{todo}</div>
      <div className={priority ? 'important' : null}> {priority ? "PENTING" : "Not SO"}</div>
    </div>
  )
}

export default ListCard