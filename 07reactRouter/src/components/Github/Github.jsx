import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/harshil048')
  //   .then((res)=>{
  //     return res.json();
  //   })
  //   .then((data)=>{
  //     setData(data);
  //   })
  // },[])

  return (
    <>
      <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl font-bold rounded-md'>Github Followers : {data.followers}
      </div>
      <div className="mx-auto my-7 rounded-lg h-[300px] w-[300px] bg-cover" style={{backgroundImage: `url(${data.avatar_url})` }}></div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/harshil048');
  return response.json();
}