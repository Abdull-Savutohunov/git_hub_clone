import React from 'react'
import { endpoints } from '../../configs';
import { useParams } from 'react-router-dom';
import cls from './scss/Folowing.module.scss'

function Folowing() {
  const [userFolowing , setUserFolowing] = React.useState('')
  const {login} = useParams()
  React.useEffect(() => {
    endpoints.FollowingOfUser(login).then(r => {
      setUserFolowing(r.data)
      // console.log(r.data);
    })
  }, [login])
  return (
    <div>
      <div className={cls.userFollowingContainer}>
        {userFolowing && userFolowing.map(item =>  {
          // console.log(item);
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

export default Folowing
