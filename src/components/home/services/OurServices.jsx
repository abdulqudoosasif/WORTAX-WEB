import React from 'react'
import ServicesHeader from './ServicesHeader'
import { IoIosArrowRoundForward } from "react-icons/io";


const OurServices = () => {
    return (
        <div className='flex flex-col justify-center px-[5vw]'>
            <ServicesHeader />
            <div className='flex flex-col duration-500 mb-20'>
                <div className='group w-full h-20 flex justify-between items-center border-b-2 border-black py-2 overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title w-4/12'>
                        <h2 className='text-3xl font-medium'>Website Development</h2>
                    </div>
                    <div className='discription w-4/12'>
                        <p className='text-sm font-light leading-4'>Custom websites that turn local visitors into loyal customers</p>
                    </div>
                    <div className='image w-4/12 flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-48 rounded-lg hidden group-hover:block' /></div>
                        <div><button className='rounded-full border border-black text-3xl p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full h-20 flex justify-between items-center border-b-2 border-black py-2 overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title w-4/12'>
                        <h2 className='text-3xl font-medium'>LocalStory Suite</h2>
                    </div>
                    <div className='discription w-4/12'>
                        <p className='text-sm font-light leading-4'>Share your local business story across all digital channels
                        </p>
                    </div>
                    <div className='image w-4/12 flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-48 rounded-lg hidden group-hover:block' /></div>
                        <div><button className='rounded-full border border-black text-3xl p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full h-20 flex justify-between items-center border-b-2 border-black py-2 overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title w-4/12'>
                        <h2 className='text-3xl font-medium'>BizCraft Design</h2>
                    </div>
                    <div className='discription w-4/12'>
                        <p className='text-sm font-light leading-4'>Visual excellence that makes your local business stand out</p>
                    </div>
                    <div className='image w-4/12 flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-48 rounded-lg hidden group-hover:block' /></div>
                        <div><button className='rounded-full border border-black text-3xl p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full h-20 flex justify-between items-center border-b-2 border-black py-2 overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title w-4/12'>
                        <h2 className='text-3xl font-medium'>LocalConnect CRM</h2>
                    </div>
                    <div className='discription w-4/12'>
                        <p className='text-sm font-light leading-4'>Seamlessly manage customer relationships and grow your community</p>
                    </div>
                    <div className='image w-4/12 flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-48 rounded-lg hidden group-hover:block' /></div>
                        <div><button className='rounded-full border border-black text-3xl p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full h-20 flex justify-between items-center border-b-2 border-black py-2 overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title w-4/12'>
                        <h2 className='text-3xl font-medium'>LocalReach SEO</h2>
                    </div>
                    <div className='discription w-4/12'>
                        <p className='text-sm font-light leading-4'>Help nearby customers find your business first</p>
                    </div>
                    <div className='image w-4/12 flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-48 rounded-lg hidden group-hover:block' /></div>
                        <div><button className='rounded-full border border-black text-3xl p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
                <div className='group w-full h-20 flex justify-between items-center border-b-2 border-black py-2 overflow-y-visible hover:bg-gray-300  duration-700'>
                    <div className='title w-4/12'>
                        <h2 className='text-3xl font-medium'>MainStreet Solutions</h2>
                    </div>
                    <div className='discription w-4/12'>
                        <p className='text-sm font-light leading-4'>Tailored digital tools that solve unique local business challenges
                        </p>
                    </div>
                    <div className='image w-4/12 flex justify-between items-center px-5'>
                        <div><img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" className='w-48 rounded-lg hidden group-hover:block' /></div>
                        <div><button className='rounded-full border border-black text-3xl p-1 group-hover:bg-black group-hover:text-white duration-700 '><IoIosArrowRoundForward /></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
