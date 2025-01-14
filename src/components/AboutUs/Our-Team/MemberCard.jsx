import React, { useState, useEffect } from "react";
import Logo from '../../../assets/img/wortax-black.png';

const MemberCard = (props) => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      const [cursorText, setCursorText] = useState("");
      const [cursorVariant, setCursorVariant] = useState("default");
   

    const handleClick = () => {
        props.onClick();
    };

    const variants = {
        default: {
          opacity: 1,
          height: 10,
          width: 10,
          x: 0,
          y: 0,
          transition: { type: "spring", mass: 0.6 },
        },
        card: {
          opacity: 1,
          height: 40,
          width: 190,
          backgroundColor: "#C9FF00",
          x: 0,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 28 },
        },
        hidden: {
          opacity: 0,
        },
      }; 
    
      const handleMouseMove = (e) => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      };
    
      const handleCardEnter = (title) => {
        setCursorText(title);
        setCursorVariant("card");
      };
    
      const handleCardLeave = () => {
        setCursorText("");
        setCursorVariant("default");
      };
    return (
        <div
            className={`absolute member-card w-[75vw] h-[38vw] mx-auto bg-white rounded-lg flex flex-col justify-between p-[1vw] cursor-pointer
                        transition-all duration-700 ease-in-out 
                        ${props.isActive ? 'translate-x-0 translate-y-0 opacity-100 z-10' :
                            props.isPrevActive ? 'translate-x-0 translate-y-full opacity-0 z-0' :
                                'translate-x-full translate-y-0 opacity-0 z-0'}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} // Add event listeners for hover
        >
            <div className='w-full flex justify-between'>
                <div className='logo'>
                   <img src={Logo} />
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

            {/* Circular Cursor Background - Visible when hovered */}
            {isHovered && (
                <div
                    className="fixed w-[9vw] h-[9vw] bg-lime-300 shadow-sm shadow-slate-300 rounded-full pointer-events-none transition-transform duration-300 mix-blend-multiply 
                    flex items-center justify-center animate-fade tracking-wide"
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
