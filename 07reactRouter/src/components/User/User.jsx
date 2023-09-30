import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid} = useParams();

  return (
    <div className='text-4xl font-bold py-10 text-center'>User : {userid} </div>
  )
}

export default User