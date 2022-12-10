import React from 'react'
import { AiOutlineInbox } from 'react-icons/ai'
import { TbBook, TbBook2 } from 'react-icons/tb'
import { FiBox, FiStar } from 'react-icons/fi'
import './scss/ProfileNav.scss'
import { Link } from 'react-router-dom';
const ProfileNav = () => {
  return (
    <div className='profilenav'>
      <nav >
        <div className="profileIcon">
          <Link to={'/myfolowers'}>
            <AiOutlineInbox/>
            <h3>Projects</h3>
          </Link>
        </div>
        <div className="profileIcon">
          <FiBox/>
          <h3>Packages</h3>
        </div>
        <div className="profileIcon">
          <FiStar/>
          <h3>Stars</h3>
        </div>
      </nav>
    </div>
  )
}

export default ProfileNav
