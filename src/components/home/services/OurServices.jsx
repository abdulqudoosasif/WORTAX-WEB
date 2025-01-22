import React from 'react'
import ServicesHeader from './ServicesHeader'
import { IoIosArrowRoundForward } from "react-icons/io";


const OurServices = () => {
    return (
        <div 
         className='flex flex-col justify-center px-[5vw]  lg:-mt-[35vw] md:-mt-[40vh] -mt-[49vh] md:pt-[20vh]  lg:pt-[8vw] pt-20  bg-gray-50'>
            <ServicesHeader />
            <div className='flex flex-col duration-500 mb-[5vw]'>
                <div className='group w-full lg:h-[7vw] h-36 pl-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center border-b-2 border-black  overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title lg:w-4/12 w-full'>
                        <h2 className='lg:text-[2.3vw] text-lg font-medium'>Website Development</h2>
                    </div>
                    <div className='discription lg:w-4/12 w-full'>
                        <p className='lg:text-[1.15vw] text-sm font-light lg:leading-[1.2vw] leading-4'>Custom websites that turn local visitors into loyal customers</p>
                    </div>
                    <div className='image lg:w-4/12 w-full flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-[15vw] rounded-lg hidden lg:group-hover:block' /></div>
                        <div><button className='rounded-full border border-black lg:text-[2.3vw] p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full lg:h-[7vw] h-36 pl-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center border-b-2 border-black  overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title lg:w-4/12 w-full'>
                        <h2 className='lg:text-[2.3vw] text-lg font-medium'>LocalStory Suite</h2>
                    </div>
                    <div className='discription lg:w-4/12 w-full'>
                        <p className='lg:text-[1.15vw] text-sm font-light lg:leading-[1.2vw] leading-4'>Share your local business story across all digital channels
                        </p>
                    </div>
                    <div className='image lg:w-4/12 w-full flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-[15vw] rounded-lg hidden lg:group-hover:block' /></div>
                        <div><button className='rounded-full border border-black lg:text-[2.3vw] p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full lg:h-[7vw] h-36 pl-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center border-b-2 border-black  overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title lg:w-4/12 w-full'>
                        <h2 className='lg:text-[2.3vw] text-lg font-medium'>BizCraft Design</h2>
                    </div>
                    <div className='discription lg:w-4/12 w-full'>
                        <p className='lg:text-[1.15vw] text-sm font-light lg:leading-[1.2vw] leading-4'>Visual excellence that makes your local business stand out</p>
                    </div>
                    <div className='image lg:w-4/12 w-full flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-[15vw] rounded-lg hidden lg:group-hover:block' /></div>
                        <div><button className='rounded-full border border-black lg:text-[2.3vw] p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full lg:h-[7vw] h-36 pl-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center border-b-2 border-black  overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title lg:w-4/12 w-full'>
                        <h2 className='lg:text-[2.3vw] text-lg font-medium'>LocalConnect CRM</h2>
                    </div>
                    <div className='discription lg:w-4/12 w-full'>
                        <p className='lg:text-[1.15vw] text-sm font-light lg:leading-[1.2vw] leading-4'>Seamlessly manage customer relationships and grow your community</p>
                    </div>
                    <div className='image lg:w-4/12 w-full flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-[15vw] rounded-lg hidden lg:group-hover:block' /></div>
                        <div><button className='rounded-full border border-black lg:text-[2.3vw] p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full lg:h-[7vw] h-36 pl-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center border-b-2 border-black  overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title lg:w-4/12 w-full'>
                        <h2 className='lg:text-[2.3vw] text-lg font-medium'>LocalReach SEO</h2>
                    </div>
                    <div className='discription lg:w-4/12 w-full'>
                        <p className='lg:text-[1.15vw] text-sm font-light lg:leading-[1.2vw] leading-4'>Help nearby customers and find your business first</p>
                    </div>
                    <div className='image lg:w-4/12 w-full flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-[15vw] rounded-lg hidden lg:group-hover:block' /></div>
                        <div><button className='rounded-full border border-black lg:text-[2.3vw] p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full lg:h-[7vw] h-36 pl-2 flex lg:flex-row flex-col lg:justify-between justify-center items-center border-b-2 border-black  overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title lg:w-4/12 w-full'>
                        <h2 className='lg:text-[2.3vw] text-lg font-medium'>MainStreet Solutions</h2>
                    </div>
                    <div className='discription lg:w-4/12 w-full'>
                        <p className='lg:text-[1.15vw] text-sm font-light lg:leading-[1.2vw] leading-4'>Tailored digital tools that solve unique local business challenges
                        </p>
                    </div>
                    <div className='image lg:w-4/12 w-full flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-[15vw] rounded-lg hidden lg:group-hover:block' /></div>
                        <div><button className='rounded-full border border-black lg:text-[2.3vw] p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
