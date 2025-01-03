import React from 'react'

function Eyes() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='h-[80vh] w-[80vw] bg-neutral-900'>
        <div className='flex gap-10'>
            <div className='w-[12vw] h-[12vw] bg-white rounded-full'>
                <div className='bg'></div>
            </div>
            <div className='w-[12vw] h-[12vw] bg-white rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
