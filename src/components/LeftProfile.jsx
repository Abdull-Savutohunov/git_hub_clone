import React, { useEffect } from 'react'
import './scss/LeftProfile.scss'
import {MdInsertEmoticon , MdOutlinePeople} from 'react-icons/md'
import { endpoints } from '../configs'
import { BsDot } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const LeftProfile = () => {
  const [myProfile , setMyProfile] = React.useState('')
  console.log(myProfile);

  useEffect(() => {
    endpoints.UserMore('Abdull-Savutohunov').then(r => {
      setMyProfile(r.data)
      
    })
  }, [])



  return (
    <div>
      <div className="left">
        <div className="image">
          <img src={myProfile.avatar_url} alt="" />
          <div className="emoticonBox">
            <MdInsertEmoticon className="emoticon" />
          </div>
        </div>
          <div className="leftDetails">
            <h2>{myProfile.login} </h2>
            <button>Edit profile</button>
            <Link to={'/myfolowing'} className='folowContainer'>
              <MdOutlinePeople/> {myProfile.followers}folowers
              <BsDot className='dot'/>{myProfile.following}folowing   
            </Link>
          </div>
      </div>
    </div>
  )
}

export default LeftProfile
