import React, { useState } from 'react';
import MemberCard from './MemberCard';
import { motion } from 'framer-motion'


const OurTeam = () => {
    const [activeCard, setActiveCard] = useState(0);

    const members = [
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "1",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "2",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "3",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "4",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "5",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "6",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "7",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "8",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "9",
        },
        {
            Image: "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-608x660.jpg",
            Role: "Lead Designer",
            First_name: "Kseniia",
            Last_name: "Palamarchuk",
            Member_number: "10",
        }
    ];

    const handleNextCard = () => {
        setActiveCard((prev) => (prev + 1) % members.length);
    };

    return (
        <div className='relative lg:top-[23vw] -top-[30vh] rounded-3xl w-full  bg-neutral-900 z-30 mb-[12vw]  flex flex-col items-center justify-center overflow-hidden'
            data-scroll
            data-scroll-section
            data-scroll-speed=".2"
        >
            {/* Marquee */}
            <div data-scroll data-scroll-section className='w-full  bg-transparent  lg:mt-[3vw] mt-5'>
                <div className=' border-y-[1px]  border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className=' text-[20vw] leading-none text-gray-50 font-bold '> WE ARE WORTAX • </motion.h1>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className=' text-[20vw] leading-none text-gray-50 font-bold '>   WE ARE WORTAX •</motion.h1>
                </div>
            </div>

            <div className='w-full lg:h-screen h-[600px] flex lg:items-center justify-center lg:pt-0 pt-10 px-[5vw]'>
                {/* Shadows */}
                <div className='lg:block hidden w-10/12 ml-[3vw] bg-white opacity-25 h-[36vw] rounded-lg py-[2vw]'>
                    <div className=' w-full ml-[1.2vw] opacity-30 bg-white h-[32vw] rounded-lg'></div>
                </div>
                <div className='lg:hidden flex justify-center md:w-[calc(100%-5px)] w-[calc(100%-30px)] relative bottom-2 h-72  bg-white opacity-25 rounded-lg '>
                    <div className='absolute bottom-2 w-[calc(100%-30px)] h-full mx-auto  opacity-50 bg-white  rounded-lg'></div>
                </div>
                {members.map((member, index) => (
                    <>
                        <MemberCard
                            key={index}
                            {...member}
                            isActive={index === activeCard}
                            onClick={handleNextCard}
                            isPrevActive={index === (activeCard === 0 ? members.length - 1 : activeCard - 1)}
                        />
                        <button
                            key={index}
                            {...member}
                            isActive={index === activeCard}
                            onClick={handleNextCard}
                            isPrevActive={index === (activeCard === 0 ? members.length - 1 : activeCard - 1)}
                            className="absolute bottom-[15%] z-50 lg:hidden w-24 h-24 bg-lime-300  rounded-full 
                    flex items-center justify-center"
                        >
                            Tap Here!
                        </button>
                    </>
                ))}

            </div>
        </div>
    );
};

export default OurTeam;