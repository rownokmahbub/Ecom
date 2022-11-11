import React from 'react'
import Star from './Star'

const DiscountDeal = () => {
  return (
    <div className=' mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10'>
      <div className="flex flex-col">
      <img src="/assets/discount.svg" alt="" />
        <div className=" -mt-36 flex flex-col items-center justify-center px-6 ">
        <div className=" flex gap-5">
          <div className="flex  items-center p-2">
              <div className="flex flex-col  items-center bg-gray-50 rounded-lg p-1 w-16 h-16">
                <p className='text-green-400'>96</p>
                <p className='text-gray-500'>days</p>
              </div>
          </div>
          <div className="flex  items-center p-2">
              <div className="flex flex-col  items-center bg-gray-50 rounded-lg p-1 w-16 h-16">
                <p className='text-green-400'>96</p>
                <p className='text-gray-500'>days</p>
              </div>
          </div>
          <div className="flex  items-center p-2">
              <div className="flex flex-col  items-center bg-gray-50 rounded-lg p-1 w-16 h-16">
                <p className='text-green-400'>96</p>
                <p className='text-gray-500'>days</p>
              </div>
          </div>
          <div className="flex  items-center p-2">
              <div className="flex flex-col  items-center bg-gray-50 rounded-lg p-1 w-16 h-16">
                <p className='text-green-400'>96</p>
                <p className='text-gray-500'>days</p>
              </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-white px-4 ">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet!</p>
      <div className="flex justify-between ">
      <Star/>
      <p>20% OFF</p>
      </div>
    
        </div>
        </div>
      </div>
     
    
   
    </div>
  )
}

export default DiscountDeal