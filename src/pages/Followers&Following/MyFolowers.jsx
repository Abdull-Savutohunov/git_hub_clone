import React from 'react'
import { endpoints } from '../../configs';

function MyFolowers() {
  const [myFolowers, setMyFolowers] = React.useState('')
  // console.log(myFolowers);

  React.useEffect(() => {
    endpoints.UserFollowers('Abdull-Savutohunov').then(r => {
      setMyFolowers(r.data)
      // console.log(r.data);
    })
  }, [])
  return (
    <div>
      <div className="myfollowingContainer">
        {myFolowers && myFolowers.map(item =>  {
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

export default MyFolowers
