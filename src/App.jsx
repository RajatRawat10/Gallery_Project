import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Imgcards from './components/Imgcards'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data)
  }

  useEffect(() => {
    getdata();
  }, [index])


  let printuserdata = <h3 className='text-gray-400 absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2'>loading...</h3>
  if (userData.length > 0) {
    printuserdata = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Imgcards elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-5 text-white'>
      <div className='flex flex-wrap justify-center gap-3 '>{printuserdata}</div>
      <div className='flex gap-4 items-center justify-center mt-4' >
        <button style={{ opacity: index == 1 ? 0.3 : 1 }} className='bg-blue-400 text-xl text-black px-4  py-0.5 rounded cursor-pointer active:scale-95' onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}>
          Prev
        </button>
        <h5>Page no {index}</h5>
        <button className='bg-blue-400 text-xl text-black px-4 py-0.5 rounded cursor-pointer active:scale-95' onClick={() => {
          setIndex(index + 1)
          setUserData([])

        }
        }>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
