import React, { useState, useEffect } from "react";
import Logo from '../../../assets/img/wortax-black.png';

const MemberCard = (props) => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    // Update position on mouse move
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
        props.onClick();
    };

    // Add event listener for mouse movement
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Handle hover state
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            className={`absolute member-card lg:w-[75vw] w-[calc(100%-50px)] lg:h-[38vw] h-72 mx-auto bg-white rounded-lg flex flex-col justify-between lg:p-[1vw] p-1 cursor-pointer
                        transition-all duration-500 ease-in-out 
                        ${props.isActive ? 'translate-x-0 translate-y-0 opacity-100 z-10' :
                            props.isPrevActive ? 'translate-x-0 translate-y-full opacity-0 z-0' :
                                'translate-x-full translate-y-0 opacity-0 z-0'}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} // Add event listeners for hover
        >
            <div className='w-full flex justify-between'>
                <div className='logo'>
                   <img src={Logo} className="lg:w-[10vw] w-16 " />
                </div>
                <div className='flex flex-col lg:gap-2 gap-1'>
                    <img src={props.Image} alt="" className='lg:w-[19vw] w-32 rounded-lg' />
                    <p className='lg:text-[1.1vw] text-xs font-light lg:tracking-tight'>{props.Role}</p>
                </div>
            </div>

            <div className='w-full flex justify-between items-end'>
                <div className='flex flex-col'>
                    <h2 className='first-name uppercase lg:text-[4.5vw] text-3xl font-bold tracking-tighter leading-none'>{props.First_name}</h2>
                    <h2 className='last-name uppercase lg:text-[4.5vw] text-3xl font-bold tracking-tighter leading-none'>{props.Last_name}</h2>
                </div>
                <h2 className='member-number uppercase lg:text-[5.5vw] text-3xl font-bold tracking-tighter leading-none'>{props.Member_number}/10</h2>
            </div>
            

            {/* Circular Cursor Background - Visible when hovered */}
            {isHovered && (
                <div
                    className="fixed w-[9vw] h-[9vw] bg-lime-300 rounded-full pointer-events-none transition-transform duration-300 mix-blend-multiply 
                    lg:flex hidden items-center justify-center animate-fade tracking-wide"
                    style={{
                        top: position.y - 120,
                        left: position.x - 200,
                    }}
                >
                    NEXT
                </div>
            )}
        </div>
    );
};

export default MemberCard;
