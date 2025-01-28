import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Service = (props) => {
    return (
        <div className='group w-full lg:h-[7vw] h-36 pl-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center border-b-2 border-black  overflow-y-visible hover:bg-gray-300  duration-700'>
            <div className='title lg:w-4/12 w-full'>
                <h2 className='lg:text-[2.3vw] text-lg font-medium'>{props.title}</h2>
            </div>
            <div className='discription lg:w-4/12 w-full'>
                <p className='lg:text-[1.15vw] text-sm font-light lg:leading-[1.2vw] leading-4'>{props.description}</p>
            </div>
            <div className='image lg:w-4/12 w-full flex justify-between items-center px-5'>
                <div><img src={props.image} className='w-[15vw] rounded-lg hidden lg:group-hover:block' /></div>
                <div><button className='rounded-full border border-black lg:text-[2.3vw] p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
            </div>
        </div>
    )
}

export default Service
