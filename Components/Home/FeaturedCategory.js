import React, { useState } from 'react'
import Star from './Star'

const FeaturedCategory = () => {
  const category=[
    {
      img:"/assets/tv.svg",
      title:"55 4K Neo QLED TV ultra slim design",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/laptop.svg",
      title:"Noise-reducing wireless headphones",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/vacume.svg",
      title:"Compact robot vacuum cleaner",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/mobile.svg",
      title:"Ultralight Xiaomi 11 Lite with 6.55 AMOLED screen",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/ac.svg",
      title:"Air Condition bajeal k100 ",
      size:"M",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/tv.svg",
      title:"Television",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },

    {
      img:"/assets/laptop.svg",
      title:"Noise-reducing wireless headphones",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/vacume.svg",
      title:"Compact robot vacuum cleaner",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/mobile.svg",
      title:"Ultralight Xiaomi 11 Lite with 6.55 AMOLED screen",
      size:"L",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
    {
      img:"/assets/ac.svg",
      title:"Air Condition bajeal k100 ",
      size:"M",
      text:"Best Television you can buy from us",
      star:"",
      rating:"43",
      price:"$32",
    },
   
  ]
  const [love, setLove]=useState(false)
  return (
    <div>
      <p className='text-3xl font-medium '>Featured Category</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 my-10">
          {category.map((ctg,i)=>{
            return(
              <div key={i} className='relative border border-gray-200 flex flex-col items-start px-4 rounded-3xl py-4'>
               
                <img className='w-full h-28 flex items-center' src={ctg.img} alt="" />
                <div className="absolute right-4 top-4">
                <img src="/assets/lovefill.svg" alt="" />
                </div>
              <div className="flex items-center justify-between w-full">
              <p className='text-[15px] font-medium line-clamp-1'>{ctg.title}</p>
              <p className='w-6 h-6 flex p-3 justify-center font-medium items-center rounded-lg bg-[#fff0eb]'>{ctg.size}</p>
              </div>
              
                <p className='text-xs text-gray-500 mt-2 line-clamp-1'>{ctg.text}</p>
                <div className="flex gap-2 mt-2 items-center">
                  <Star/>
                  <p className='text-xs'>({ctg.rating})</p>
                </div>
                <div className="flex gap-2 mt-2 items-center justify-between w-full">
                <p className='text-lg font-medium text-blue-900'>{ctg.price}</p>
                <div className="bg-gradient-to-r from-[#37a4e0] to-[#7dc3c1] p-2 rounded-xl cursor-pointer">
                <img className='w-4' src="/assets/cart.svg" alt="" />
                </div>
                  
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FeaturedCategory