import React from 'react'
import Menu from './Menu'

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='title'>
        <img src='./images/1066246.png' className='title-img' alt=''></img>
        <h1>NEO Explorer</h1>
      </div>
      <Menu />
    </div>
  )
}

export default NavBar
