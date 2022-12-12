import React from 'react'
import { endpoints } from '../../configs';
import './scss/MyFolowing.scss'


function MyFolowing() {
  const [myFolowing , setMyFolowing] = React.useState('')

  React.useEffect(() => {
    endpoints.FollowingOfUser('Abdull-Savutohunov').then(r => {
      setMyFolowing(r.data)
      // console.log(r.data);
    })
  }, [])

  return (
    <div>
      <div className="myfollowingContainer">
        {myFolowing && myFolowing.map(item =>  {
          // console.log(item);
          return(
            <div key={item.id} className="cardContainer">
              <div className="image">
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

export default MyFolowing
