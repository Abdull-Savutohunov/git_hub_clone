import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import cls from './scss/Menu.module.scss'
import {endpoints} from "../../configs";
import {ProfileList} from "../../utils";

const Menu = () => {
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
    <div>
      <div className={cls.menu}>
        <div className={cls.menuContainer}>
          <p>Sign in</p>
          <div className={cls.lineThree}/>
          <div className={cls.menuStatus}>
            <input type="text" onChange={e => setUserName(e.target.value)} />
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
          <div className={cls.lineThree}/>
          <p><Link to='/'>Your profile</Link></p>
          <div className={cls.profilenav}>
            {
              ProfileList.map(item => (
                <div key={item.id}>
                  <Link style={{display:'flex' , alignItems:'center' , gap:'10px'}} to={item.path} className={cls.nav}><div style={{alignItems:'center'}} className={cls.profileIcon}>{item.icons}</div><h3>{item.title}</h3></Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
