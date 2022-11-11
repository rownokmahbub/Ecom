import React from 'react'
import {HiOutlineStar, HiStar} from 'react-icons/hi'
const Star = () => {
  return (
    <div className='flex gap-2 text-yellow-400 text-lg items-center'>
        <HiStar/>
        <HiStar/>
        <HiStar/>
        <HiStar/>
        <HiOutlineStar className='text-base'/>
    </div>
  )
}

export default Star