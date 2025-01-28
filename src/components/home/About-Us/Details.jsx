import React from 'react'

const Details = (props) => {
    return (
        <div className='lg:w-[calc(33%-3vw)] md:w-[calc(50%-3vw)] w-[calc(100%-3vw)] flex flex-col items-center  lg:gap-[1.8vw] gap-5 lg:px-[1.9vw] px-3 lg:pt-[3.5vw] pt-10 lg:pb-[3.5vw] pb-12 border rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl shadow-slate-400 duration-300' >
            <img className='lg:w-[3.5vw] w-12' src={props.icon} alt="Content Not Found" />
            <h5 className='lg:text-[1.25vw] md:text-xl text-base tracking-[0.08vw]'>{props.title}</h5>
            <p className="lg:text-[1.03vw]  md:text-sm text-xs lg:leading-[1.5vw]  text-[#5f656c] text-center lg:px-[1.3vw] px-6">
                {props.description}
            </p>
        </div>
    )
}

export default Details
