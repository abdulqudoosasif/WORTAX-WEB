import React from 'react'
import logoimg from "../../../assets/img/logo-img.png";
function HeroPage() {
  return (
    <div className=' h-[405px] bg-white items-center justify-center flex '>
      {/* <h1 className='text-black font-extrabold leading-[5vw] text-[5vw] text-center '>
        WORTAX IT  <br /><span className='text-blue-600'>
            SOLUTIONS
        </span>
      </h1> */}

      
                                <img src={logoimg} className=' h-[300px] ' alt="" />
                      
    </div>
  )
}

export default HeroPage
