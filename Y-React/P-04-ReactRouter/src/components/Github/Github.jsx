import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Mukulkumar25')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, []);
  return (
    <>
      <div className='text-3xl text-center m-4 p-4 bg-gray-600 text-white'>Github Followers: {data.followers}</div>
      <img src={data.avatar_url} alt='Github Profile' className='flex justify-center items-center' width={300}/>
    </>
  )
}

export default Github

export const gitHubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/Mukulkumar25');
  return response.json();
}