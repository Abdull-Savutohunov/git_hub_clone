import React from 'react'
import { useParams } from 'react-router-dom';
import { endpoints } from '../../configs';
import cls from './scss/Folowers.module.scss'

const Folowers = () => {
  const [userFolowers , setUserFolowers] = React.useState('')
  console.log(userFolowers);

  const {login} = useParams()
  React.useEffect(() => {
    endpoints.UserFollowers(login).then(r => {
      setUserFolowers(r.data)
    })
  }, [login])
  return (
    <div>
      <div className={cls.userFollowersContainer}>
        {userFolowers && userFolowers.map(item =>  {
          return(
            <div key={item.id} className={cls.cardContainer}>
              <div className={cls.image}>
                <img src={item.avatar_url} alt="" />
              </div>
              <a href={item.html_url}>{item.login}</a>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default Folowers
