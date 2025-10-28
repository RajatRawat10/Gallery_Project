import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])

  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
    setUserData(response.data)
    // console.log(userData)
  }

  let printuserdata = "No User Avaiable"
  if (userData.length > 0) {
    printuserdata = userData.map(function (elem, idx) {
      return <div key={idx}>
        <img className='h-40' src={elem.download_url} alt="" />
      </div>
    })
  }


  return (
    <div className='bg-black h-screen overflow-auto p-5 text-white'>
      <button onClick={getdata} className='bg-green-600 px-6 active:scale-95 py-2 rounded text-white'>Get Data</button>
      <div className='flex flex-wrap gap-4'>{printuserdata}</div>

    </div>
  )
}

export default App
