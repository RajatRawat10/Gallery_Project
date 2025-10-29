import React from 'react'

const Imgcards = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden rounded-2xl bg-white'>
            <img className='h-full w-full object-cover ' src={props.elem.download_url} alt="" />
          </div>
          <h2 className='font-light '>{props.elem.author}</h2 >
        </a>
    </div>
  )
}

export default Imgcards
