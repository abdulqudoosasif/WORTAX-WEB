import React from 'react'
import ThreeDmodel from './ThreeDmodel'

function MainLaptopFile() {
  return (
    <div className='h-[100vh] w-[100vw] items-center justify-center flex rounded-b-3xl overflow-hidden  z-20 bg-gray-50 relative'>
      <h1 className='text-[15vw] font-extrabold'>GET STARTED</h1>
      <div className=' absolute w-full h-full z-10'>
        <ThreeDmodel/>
      </div>
    </div>
  )
}

export default MainLaptopFile
