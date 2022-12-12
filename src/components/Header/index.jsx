import React, { useEffect, useState } from 'react'
import cls from './Test.module.scss'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ProfileList } from '../../utils'
import { endpoints } from '../../configs'

const Test = () => {
  const [open , setOpen] = useState(false)
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

    <div className={cls.container}>

        <div className={cls.row}>
          <BsGithub />
          <div className={cls.search_data}>
            <input
              className={cls.search_input}
              type="text" 
              placeholder="Search"
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div onClick={() => {setOpen(!open)}} className={cls.menu_data}>
            <AiOutlineMenu />
          </div>
        </div>

        <div className={cls.search_result_data}>
            <ul>
                {
                  refuteSearche.length < 3 ? '' :  userNameData && userNameData.map(item => {
                    return(
                      <li key={item.id}>
                        <Link onClick={clearInput} to={`/users/${item.login}`}>{item.login}</Link>
                      </li>
                    )
                  })
                }
            </ul>
        </div>

        <div className={cls.menu_none}>
          <div className={`${cls.dropdown_menu} ${open? `${cls.active}` : `${cls.inactive}`}`}>           
            <ul className={cls.ORPP_list}>
              {
                ProfileList.map((item) => (
                  <div  key={item.id}>
                    <Link className={cls.navList}  to={item.path}>{item.icons} {item.title}</Link>
                  </div>
              ))
            }
            </ul>
          </div>
        </div>
      </div>
  )
}


export default Test
