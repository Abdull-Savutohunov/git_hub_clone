import React from 'react'
import './scss/Profile.scss'
import ProfileNav from './../components/ProfileNav';
import LeftProfile from '../components/LeftProfile';
import Overview from './../components/Overview';
import { Outlet, Link } from 'react-router-dom';
import { ProfileList } from './../utils/index';


const Profile = () => {
  return (
    <div>
      <div className="profile">
        <ul>
          {
            ProfileList.map(item => (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
        <div>
          <Outlet/>
        </div>
        <div className="lineFour"/>
        <div className="sectionCenter">
          <LeftProfile className="LeftProfile" />
          <Overview className="Overview" />
        </div>
      </div>
    </div>
  )
}

export default Profile
