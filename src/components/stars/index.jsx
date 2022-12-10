import React from 'react'
import { useParams } from 'react-router-dom'
import { endpoints } from './../../configs/index';
import StarsCount from './StarsCount';

const Stars = () => {
  const [stars , setStars] = React.useState('')
  const { login } = useParams()
  // console.log(starred.length);

  React.useEffect(() => {
    endpoints.StarsOfUser(login).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setStars(newData)
    })
  }, [login])
  return (
    <>
      <div>
        {
          stars.length === 0 ? <p> You dont have Stars </p> : stars.map(item => (
            <StarsCount key={item.id} item={item}/>
          ))
        }
      </div>
    </>
  )
}


export default Stars



