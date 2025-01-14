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
        <div className='relative top-[23vw] rounded-t-3xl w-full  bg-[#004d43] z-30 mb-[12vw]  flex flex-col items-center justify-center overflow-hidden'
            data-scroll
            data-scroll-section
            data-scroll-speed=".2"
        >
            {/* Marquee */}
            <div data-scroll data-scroll-section className='w-full  bg-transparent  mt-[3vw]'>
                <div className=' border-y-[1px]  border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className=' text-[20vw] leading-none text-gray-50 font-bold '> WE ARE WORTAX • </motion.h1>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className=' text-[20vw] leading-none text-gray-50 font-bold '>   WE ARE WORTAX •</motion.h1>
                </div>
            </div>

            {/* <div  className=' border-y-[1px]  border-zinc-300 flex  overflow-hidden whitespace-nowrap mt-[3vw]'>
                <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className=' text-[20vw] leading-none text-gray-50 font-bold '> WE ARE WORTAX • </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className=' text-[20vw] leading-none text-gray-50 font-bold '>   WE ARE WORTAX •</motion.h1>
            </div> */}

            <div className='w-full h-screen flex items-center justify-center px-[6vw]'>
                {members.map((member, index) => (
                    <MemberCard
                        key={index}
                        {...member}
                        isActive={index === activeCard}
                        onClick={handleNextCard}
                        isPrevActive={index === (activeCard === 0 ? members.length - 1 : activeCard - 1)}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurTeam;