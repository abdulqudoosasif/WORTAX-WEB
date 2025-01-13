import React, { useState } from 'react';
import MemberCard from './MemberCard';
import Marquee from './Marquee';

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
        <div data-scroll
        data-scroll-section
        data-scroll-speed=".6"
        className='-mt-[12vw]  relative z-30'>
            <Marquee/>
            <div className='relative top-[25vw] w-full h-screen bg-[#004d43] p-[6vw] flex flex-col items-center justify-center overflow-hidden'>
            
       
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
