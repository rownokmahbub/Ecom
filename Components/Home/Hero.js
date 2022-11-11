import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row lg:h-screen justify-between items-center">
    <div className="flex flex-col gap-5">
        <p className='text-[50px] leading-tight font-semibold'>The best place to find <br /> and buy amazing product</p>
        <p className='text-base text-gray-600'>Our new shoe will blow your mind with nice greep
            and balance for play to win <br /> the match easily on the ground</p>
            <div className="flex flex-col md:flex-row md:gap-10  items-center">
                <div className="flex capitalize bg-gradient-to-r from-[#37a4e0] to-[#7dc3c1] px-4 py-2 gap-2 rounded-xl items-center cursor-pointer">
                  <p className='text-lg text-white'>shop now</p>
                  <img src="/assets/cart.svg" alt="" />
                </div>
                <div className="flex capitalize  px-4 py-2 gap-2 rounded-xl items-center">
                <img src="/assets/trend.svg" alt="" />
                  <p className='text-lg font-medium underline'>What's Trending ?</p>
                 
                </div>
            </div>
    </div>
    <div className="flex flex-wrap">
      <img src="/assets/hero.svg" alt="" />
    </div>
</div>
  )
}

export default Hero