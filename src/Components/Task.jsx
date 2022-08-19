import React from 'react'
import '../style/task.css';

// default tittle='Tittle', description='Description'
const Task = ({tittle='Tittle', description='Description', deleteTaskHandler, index}) => {

  return (
    <>
        <div className='task'>
            <span className='tp'>
              {tittle}
              <button className='tBtn'
                onClick={() => {deleteTaskHandler(index)}}
              >-</button>
            </span>
            <div className='ts'>{description}</div>
            
        </div>
    </>
  )
}

export default Task