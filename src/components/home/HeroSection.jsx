import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex items-center flex-col gap-y-3 md:flex-row '>
        <div className='flex flex-col gap-1.5'>
          <p className=' text-purple-700 text-left text-5xl'>
            Plan College Events with Ease
          </p>
          <p className='text-left text-gray-700 text-xl drop-shadow-2xl'>
            The all-in-one platform for scheduling, managing, and hosting college events. Make your campus life more vibrant!
          </p>
          <button className='w-36 h-10 rounded-lg font-bold mt-2 bg-purple-700 drop-shadow-lg'>Browse Events</button>
        </div>
        <div>
          <img src="../src/assets/calendar.png" alt="" />
          
        </div>
    </div>
    )
}

export default HeroSection
