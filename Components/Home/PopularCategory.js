import React from 'react'

const PopularCategory = () => {
  const category=[
    {
      img:"/assets/tv.svg",
      title:"Television",
      text:"Best Television you can buy from us"
    },
    {
      img:"/assets/laptop.svg",
      title:"Laptop",
      text:"Best Television you can buy from us"
    },
    {
      img:"/assets/headphone.svg",
      title:"Headphone",
      text:"Best Television you can buy from us"
    },
    {
      img:"/assets/vacume.svg",
      title:"Vacuum CLeaner",
      text:"Best Television you can buy from us"
    },
    {
      img:"/assets/mobile.svg",
      title:"Mobile",
      text:"Best Television you can buy from us"
    },
    {
      img:"/assets/ac.svg",
      title:"Air Condition",
      text:"Best Television you can buy from us"
    },
  ]
  return (
    <div>
      <p className='text-3xl font-medium '>Popular Category</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-8 my-10">
          {category.map((ctg,i)=>{
            return(
              <div key={i} className='border border-gray-200 flex flex-col items-start px-4 rounded-3xl py-4'>
                <img className='w-full h-28 flex items-center' src={ctg.img} alt="" />
                <p className='text-lg font-medium'>{ctg.title}</p>
                <p className='text-xs text-gray-500'>{ctg.text}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PopularCategory