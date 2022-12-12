import React, { useEffect, useState } from 'react'
import { useParams, Link, Outlet } from 'react-router-dom';
import { endpoints } from './../configs/index';
import { MdInsertEmoticon, MdOutlinePeople } from 'react-icons/md';
import { BsDot } from 'react-icons/bs';
import cls from './scss/UserMore.module.scss'
import { ProfileList } from './../utils/index';


function UserMore() {
  const {login} = useParams()
  const [userProfile , setUserProfile] = useState('')

  useEffect(() => {
    endpoints.UserMore(login).then(r => {
      setUserProfile(r.data)
    })
  }, [login])


  return (
    <div>
      <div className={cls.profilenav}>
        {
          ProfileList.map(item => (
            <div key={item.id}>
              <Link style={{display:'flex' , alignItems:'center' , gap:'10px'}} to={item.path} className={cls.nav}><div className="profileIcon">{item.icons}</div><h3>{item.title}</h3></Link>
            </div>
          ))
        }
      </div>

      <div className={cls.container}>
        <div className={cls.left}>
          <div className={cls.image}>
            <img src={userProfile.avatar_url} alt="" />
            <div className={cls.emoticonBox}>
              <MdInsertEmoticon className={cls.emoticon} />
            </div>
          </div>
          <div className={cls.leftDetails}>
            <h2>{userProfile.login} </h2>
            <button>Edit profile</button>
            <div className={cls.folowContainer}>
              <Link className={cls.folowerContainer} to={`/users/${userProfile.login}/folowers`}><MdOutlinePeople/> {userProfile.folowers} followers</Link>
              <Link className={cls.folowingContainer} to={`/users/${userProfile.login}/folowing`}><BsDot className={cls.dot}/> {userProfile.folowing} following</Link>
            </div>
          </div>
          <div className={cls.right}>
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserMore
