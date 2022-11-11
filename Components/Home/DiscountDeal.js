import React from 'react'
import Star from './Star'

const DiscountDeal = () => {
  const category=[
    {
      img:"/assets/discount.svg",
      title:'Lorem ipsum dolor sit ametcons ectetur adipisicing elit. Illum, eveniet!',
      off:"20%OFF",
      disprice:'$234',
      price:'$324'
    }, 
    {
      img:"/assets/dis-1.svg",
      title:'Lorem ipsum dolor sit ametcons ectetur adipisicing elit. Illum, eveniet!',
      off:"20%OFF",
      disprice:'$234',
      price:'$324'
    },
    {
      img:"/assets/dis-2.svg",
      title:'Lorem ipsum dolor sit ametcons ectetur adipisicing elit. Illum, eveniet!',
      off:"20%OFF",
      disprice:'$234',
      price:'$324'
    }
  ]
  return (
    <>
    <div className="flex justify-between">
    <p className='text-3xl font-medium '>Discount Deal</p>
    <p className='text-xl text-gray-500 '>See All</p>
    </div>
    
       <div className=' mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 my-10'>
      {category.map((ctg,i)=>{
        return(
          <div key={i} className="flex flex-col rounded-xl">
          <img className='rounded-xl  w-full' src={ctg.img} alt="" />
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
            <div className="flex flex-col gap-2 bg-white shadow-2xl px-4 rounded-xl mt-2 py-4">
          <p className='text-lg font-medium line-clamp-2'>{ctg.title}</p>
          <div className="flex justify-between ">
          <Star/>
          <p className='text-green-600 text-lg'>{ctg.off}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <p className='text-green-600'>{ctg.disprice}</p>
              <p className='line-through'>{ctg.price}</p>
            </div>
            <div className='flex gap-2 rounded-2xl cursor-pointer px-3 bg-gradient-to-r from-[#37a4e0] to-[#7dc3c1] py-2'>
              <p className='text-white'>add</p>
              <img src="/assets/cart.svg" alt="" />
            </div>
          </div>
            </div>
            </div>
          </div>
        )
      })}
     
     
    
   
    </div>
    </>
 
  )
}

export default DiscountDeal