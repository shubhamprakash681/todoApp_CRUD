import React, { useEffect } from 'react'
import { useState } from 'react';

import '../style/home.css';
import Task from './Task';

const Home = () => {
  const initialArray = localStorage.getItem('todo_app_data') ? 
      JSON.parse(localStorage.getItem('todo_app_data')) : 
      [];

  let [tasks, setTasks] = useState(initialArray)
  let [tittle, setTittle] = useState('')
  let [description, setDescription] = useState('')
  console.log('tittle = ', tittle)
  console.log('description = ', description)
  console.log('tasks = ', tasks)

  const formSubmitHandler = (event) => {
      event.preventDefault(); // to prevent page reloading on each submisiion

      setTasks([...tasks, {
        tittle: tittle,
        description: description
      }])
      setTittle('')
      setDescription('')
    }
    
  const deleteTask = (index) => {
    const filteredTaskArray = tasks.filter((val, ind) => {
      return ind !== index
    });
    setTasks(filteredTaskArray)
    console.log(index);
  }
  
  
  useEffect(() => {
    localStorage.setItem('todo_app_data', JSON.stringify(tasks))

  }, [tasks])

  return (
    <>
    <div className="container">
      <form onSubmit={formSubmitHandler}>

        <input className='tInp' type="text" placeholder='Tittle' 
          value={tittle} 
          onChange={(e) => {
            setTittle(e.target.value);
          }}/>

        <textarea placeholder='Description' 
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }} 
        ></textarea>

        <button type='submit'>Add</button>
      </form>
      
      {tasks.map((item, index) => {
        return (
          <>
            <Task tittle={item.tittle}
              description={item.description} 
              index={index} deleteTaskHandler={deleteTask} 
              key={index} />
          </>
        )
      })}

    </div>
    </>
  )
}

export default Home