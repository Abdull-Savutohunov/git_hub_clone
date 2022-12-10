import React from 'react'
import { endpoints } from './../configs/index';

function MyFolowers() {
  const [myFolowers, setMyFolowers] = React.useState('')
  console.log(myFolowers);

  React.useEffect(() => {
    endpoints.UserFollowers('Abdull-Savutohunov').then(r => {
      setMyFolowers(r.data)
      console.log(r.data);
    })
  }, [])
  return (
    <div>
      <div className="myfollowingContainer">
        {myFolowers && myFolowers.map(item =>  {
          console.log(item);
          return(
            <div className="cardContainer">
              <div className="image">
                <img src={item.avatar_url} alt="" />
              </div>
              <h5>{item.login}</h5>
    
            </div>
          )
        }) }

      </div>
    </div>
  )
}

export default MyFolowers
