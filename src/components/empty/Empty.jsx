import React from 'react'
import { ImFilesEmpty } from "react-icons/im";
import './index.css'

const Empty = () => {
  return (
    <div className='bg-main empty'>
        <ImFilesEmpty className='empty-icn'/>
        <p className="text main-f">There is no user yet.</p>
    </div>
  )
}

export default Empty