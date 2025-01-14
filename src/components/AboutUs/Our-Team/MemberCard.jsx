import React, { useState, useEffect } from "react";
import Logo from "../../../assets/img/Logo.png"
const MemberCard = (props) => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
   

    const handleClick = () => {
        props.onClick();
    };


    return (
        <div
            className={`absolute member-card w-[75vw] h-[38vw] mx-auto bg-white rounded-lg flex flex-col justify-between p-[1vw] cursor-pointer
                        transition-all duration-700 ease-in-out 
                        ${props.isActive ? 'translate-x-0 translate-y-0 opacity-100 z-10' :
                            props.isPrevActive ? 'translate-x-0 translate-y-full opacity-0 z-0' :
                                'translate-x-full translate-y-0 opacity-0 z-0'}`}
            onClick={handleClick}
        >
            <div className='w-full flex justify-between'>
                <div className='logo'>
                   <img src={Logo} alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <img src={props.Image} alt="" className='w-[19vw] rounded-lg' />
                    <p className='text-[1.1vw] font-light tracking-tight'>{props.Role}</p>
                </div>
            </div>

            <div className='w-full flex justify-between items-end'>
                <div className='flex flex-col'>
                    <h2 className='first-name uppercase text-[4.5vw] font-bold tracking-tighter leading-none'>{props.First_name}</h2>
                    <h2 className='last-name uppercase text-[4.5vw] font-bold tracking-tighter leading-none'>{props.Last_name}</h2>
                </div>
                <h2 className='last-name uppercase text-[5.5vw] font-bold tracking-tighter leading-none'>{props.Member_number}/10</h2>
            </div>

            {/* Circular Cursor Background - Always Visible 
            <div
                className="fixed w-[9vw] h-[9vw] bg-lime-300 shadow-sm shadow-slate-300 rounded-full pointer-events-none transition-transform duration-300 mix-blend-multiply 
                flex items-center justify-center animate-fade tracking-wide"
                style={{
                    top: position.y - 120,
                    left: position.x - 120,
                }}
            >
                NEXT
            </div> */}
        </div>
    );
};

export default MemberCard;
