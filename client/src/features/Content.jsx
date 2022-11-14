import React, {useEffect, useState} from 'react'
import ListCard from './ListCard'
import './content.css'
import {DBdummy} from '../Dummy'
import CloseBtn from '../assets/delete_icon.svg'

const Content = () => {

  const [dbCopy, setDbCopy] = useState([]);
  const [editDB, setEditDB] = useState([]);
  const [editStatus, setEditStatus] = useState(false)

  useEffect (()=> {
    setDbCopy(DBdummy)
  }, [])

  const delHandle = (id)=> {
    const delDB = dbCopy.filter(item => item._id !== id)
    setDbCopy(delDB)
  }

  const editHandle = (id) => {
    setEditStatus(true)
    console.log(id, "edit id");
  }

  return (

      <div className="contentWrapper">
        { 
          dbCopy.map((item) => {
          return (
              <ListCard 
                key={item._id}
                date={item.date} 
                todo={item.todo}
                priority={item.priority} 
                delHandle={()=> delHandle(item._id)}
                editHandle={()=> editHandle(item._id)} 
              />
            )
          })
        }
        {
          editStatus ? 
            <div className='editModal'>
              <div className='closeBtn' onClick={()=>setEditStatus(false)}>
                <img src={CloseBtn} alt="" />
              </div>
                <div>Modal open</div>
            </div> : null
        }

      </div>

  )
}

export default Content