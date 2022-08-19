import React from 'react'
import { Link } from 'react-router-dom'
import '../style/header.css';

const Header = () => {
  return (
    <>
      <nav>
        Todo App
      </nav>
      <nav className="header">
        <Link to={'/'} >Home</Link>
        <Link to={'/about'} >About</Link>
        <Link to={'/contact'} >Contact</Link>
        <Link to={'/user/tempId'} >User</Link>
      </nav>
    </>
  )
}

export default Header