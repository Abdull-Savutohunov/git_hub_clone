import React from 'react'
import './scss/MainRight.scss'
import { AiOutlineBulb } from "react-icons/ai"
import { MdRssFeed } from 'react-icons/md'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


const MainRight = () => {
  return (
    <div>
      <div className="mainRight">
        <div className="mainRightContainer">
          <div className="mainRightText">
            <h2>Following</h2>
            <h2>For you</h2>
          </div>
          <div className="lineTwo"/>

          <div className="box">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. I
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis voluptatum ipsum libero exercitationem quam blanditiis commodi suscipit 
            </p>
            <button className='btn'>
              <Link to="profile">GitHub</Link>
            </button>
          </div>
          <div className="boxCenter">
            <div className="boxCenterFirst">
              <AiOutlineBulb />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non deoloribus!</p>
            </div>
            <div className="boxCenterFirst">
              <MdRssFeed />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora pro</p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default MainRight
