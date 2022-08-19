import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {

    const param = useParams()
    console.log(param.id);

    const navigateTo = useNavigate()

  return (
    <>
        <div>user with name = {param.id}</div>
        <div><button onClick={() => {navigateTo('about')}} >Click to know about me</button></div>
    </>
  )
}

export default User