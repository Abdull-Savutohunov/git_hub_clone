import React from 'react'
import './scss/MainLeft.scss'
import { IoMdArrowDropdown } from 'react-icons/io'
import {lists}  from '../../utils/lists.js'
import { Link } from 'react-router-dom';



const MainLeft = () => {
  return (
    <div className='mainLeftContainer'>
      <div className="mainLeft">
        <div className="mainLeftName">
          <img src="https://avatars.githubusercontent.com/u/94684918?s=40&v=4" alt="" />
          <IoMdArrowDropdown/>
        </div>
        {/* line */}
        <div className="line"/>
        {/* Recent Repo */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Resent Repositories</h2>
            <button>New</button>
          </div>
          <div className="inputBox">
            <input type="text" placeholder='Find a repositories...' />
          </div>
          <div className="mainLeftList">
            {
              lists.map((item , id) => (
                <div className="item" key={id}>
                  <img src="https://avatars.githubusercontent.com/u/94684918?s=40&v=4" alt="" />
                    <div>
                      <h2>{`${item.name}/${item.repo}`}</h2>
                    </div>
                </div>
              ))
            }
            <Link to="/profile"> Show more</Link>
          </div>
          <div className="line"/>
          <div className="recenrRepo">
            <div className="recentRepos">
              <h2>Recent Active</h2>
              <p>Thanks for watching</p>
            </div>
          </div>
          <div className="line"/>
          <div className="recentRepo">
            <div className="recentRepos">
              <h2>Your teams</h2>
            </div>
            <div className="inputBox2">
              <input type="text" placeholder='find a team...'/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MainLeft
