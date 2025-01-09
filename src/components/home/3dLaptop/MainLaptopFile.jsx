import React from 'react'
import ThreeDmodel from './ThreeDmodel'

function MainLaptopFile() {
  return (
    <div className='h-[100vh] w-[100vw] items-center justify-center  rounded-b-3xl overflow-hidden lg:flex md:flex hidden z-20 bg-gray-50 relative'>
      <h1 className='text-[13vw] text-nowrap font-bold'>GET STARTED</h1>
      <div className=' absolute w-full h-full z-10'>
        <ThreeDmodel/>
      </div>
    </div>
  )
}

export default MainLaptopFile
