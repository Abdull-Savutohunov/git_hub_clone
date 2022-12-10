import React from 'react'
import { Link } from 'react-router-dom';
import './scss/Menu.scss'

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <div className="menuContainer">
          <p>Sign in</p>
          <div className="lineThree"/>
          <div className="menuStatus">
            <input type="text" name="" id="" placeholder='Set status' />
          </div>
          <div className="lineThree"/>
          <p>
            <Link to='/profile'>Your profile</Link>
          </p>
          <p>Your repositories</p>
          <p>Your codespaces</p>
          <p>Your organizations</p>
          <p>Your projects</p>
          <p>Your stars</p>
          <p>Your gists</p>
          <div className="lineThree"/>
          <p>Upgrade </p>
          <p>Future preview </p>
          <p>Help </p>
          <p>Settings </p>
          <div className="lineThree"/>
          <p>Sign out</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
