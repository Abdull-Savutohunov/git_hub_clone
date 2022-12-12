import React, { useEffect } from 'react'
import cls from './scss/Profile.module.scss'
import {MdInsertEmoticon , MdOutlinePeople} from 'react-icons/md'
import { endpoints } from '../configs'
import { BsDot } from 'react-icons/bs'
import {Link, Outlet} from 'react-router-dom';
import { MyProfileList } from '../utils'


const Profile = () => {
  const [myProfile , setMyProfile] = React.useState('')
  // console.log(myProfile);

  useEffect(() => {
    endpoints.UserMore('Abdull-Savutohunov').then(r => {
      setMyProfile(r.data)
      
    })
  }, [])
  return (
    <>
      <div className={cls.profilenav}>
        {
          MyProfileList.map(item => (
            <div key={item.id}>
              <Link style={{display:'flex' , alignItems:'center' , gap:'10px'}} to={item.path} className={cls.nav}><div style={{alignItems:'center'}} className="profileIcon">{item.icons}</div><h3>{item.title}</h3></Link>
            </div>
          ))
        }
      </div>
      <div className={cls.container}>
        <div className={cls.left}>
          <div className={cls.image}>
            <img src={myProfile.avatar_url} alt="" />
            <div className={cls.emoticonBox}>
              <MdInsertEmoticon className={cls.emoticon} />
            </div>
          </div>
          <div className={cls.leftDetails}>
            <h2>{myProfile.login} </h2>
            <button>Edit profile</button>
            <div className={cls.folowContainer}>
              <Link className={cls.folowerContainer} to={`/myfolowers`}><MdOutlinePeople/> {myProfile.followers} followers</Link>
              <Link className={cls.folowingContainer} to={`/myfolowing`}><BsDot className={cls.dot}/> {myProfile.following} following</Link>
            </div>
          </div>
        </div>
        <div className={cls.right}>
          <div className={cls.allPages}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
