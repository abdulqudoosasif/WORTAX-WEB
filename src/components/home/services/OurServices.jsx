import React from 'react'
import ServicesHeader from './ServicesHeader'
import { IoIosArrowRoundForward } from "react-icons/io";
import Service from './Service';


const OurServices = () => {
    return (
        <div

            className='flex flex-col xl:pt-[10vw] justify-center px-[5vw]  lg:-mt-[36vw] md:-mt-[40vh] -mt-[49vh] md:pt-[20vh] lg:pt-[8vw] pt-20  bg-gray-50'>
            <ServicesHeader />
            <div className='flex flex-col duration-500 mb-[5vw]'>
                <Service
                    title="Web Development"
                    description='Custom websites, e-commerce solutions, design, development, optimization, user experience'
                    image='https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg'
                />
                <Service
                    title="Web Design"
                    description='Creative, responsive web design, user-focused, brand alignment, mobile optimization'
                    image='https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg'
                />
                <Service
                    title="APP DEVELOPMENT"
                    description='Custom app development, design, integration, testing, and user experience.'
                    image='https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg'
                />
                <Service
                    title="AI SOLUTIONS"
                    description='AI-driven automation, data analysis, machine learning, predictive insights, chatbots'
                    image='https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg'
                />
                
                
            </div>
        </div>
    )
}

export default OurServices
