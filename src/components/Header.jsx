import React, {useState , useEffect } from 'react'
import cls from './scss/Header.module.scss'
import {AiOutlineGithub} from 'react-icons/ai'
import { FiBell, FiPlus } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { NavList } from './../utils/index';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { endpoints } from './../configs/index';

function Header() {
  const [show, setShow] = React.useState(false)
  const [userName , setUserName] = useState('')
  const { userNameData, setUserNameData } = useState('')
  console.log(userNameData);

  useEffect(() => {
    if(userName.length ){
      endpoints.SearchUser(userName).then(res => {      
        setUserNameData(res.data.items)
    })
    }
  }, [userName])
  // console.log(userName);

  return (
    <>
      <div className={cls.container}>
        <div className={cls.navBar}>
          <div className={cls.leftNav}>
            <Link to='/'>
              <AiOutlineGithub className={cls.logo} />
            </Link>
            <div>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </div>
          </div>
          <div className={cls.navCenter}>
            {
              NavList.map((item) => (
                <div  key={item.id}>
                  <Link className={cls.navList}  to={item.path}>{item.icons} {item.title}</Link>
                </div>
              ))
            }
          </div>
          <div className={cls.rightNav}>
            <FiBell />
            <div className={cls.navRightIcons}>
              <FiPlus />
              <IoMdArrowDropdown />
            </div>
            <div className={cls.navRightIcons} onClick={() => setShow(!show)}>
              <img src="https://avatars.githubusercontent.com/u/94684918?s=40&v=4" alt="" />
              <IoMdArrowDropdown />
            </div>
          </div>
            {
              show && <Menu/>
            }

        </div>
      </div>

    </>
  )
}

export default Header
