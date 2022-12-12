import React , {useState , useEffect } from 'react'
import cls from './styles/Header.module.scss'
import {AiOutlineGithub} from 'react-icons/ai'
import { FiBell, FiPlus } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { NavList } from './../utils/index';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { endpoints } from './../configs/index';

const Header = () => {
  const [show, setShow] = useState(false)
  const [userName , setUserName] = useState('')
  const [ userNameData, setUserNameData ] = useState('')
  const refuteSearche = useRefute(userName , 400)

  function useRefute(value ,detain ){
    const [refuteValue, setRefuteValue] = useState(value)

    useEffect(() => {
      const handler = setTimeout(() => {
        setRefuteValue(value);
      }, detain);
      return () => {
        clearTimeout(handler);
      };
    },[value, detain]);
    return refuteValue;
  }
  useEffect(() => {
    if(refuteSearche.length ){
      endpoints.SearchUser(refuteSearche).then(r => {
        setUserNameData(r.data.items)
      })
    }
  },[refuteSearche, setUserNameData] )

  const clearInput = () => {
    setUserName('')
  };

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
          <div className={cls.search_result_data}>
              <ul className={cls.searche_result_list}>
                {
                  refuteSearche.length < 3 ? '' :  userNameData && userNameData.map(item => {
                    return(
                      <li key={item.id}>
                        <Link onClick={clearInput} to={`/users/${item.login}`}> <a>{item.login}</a></Link>
                      </li>
                    )
                  })
                }
              </ul>
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
