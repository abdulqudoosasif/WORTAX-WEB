import React from 'react'
import EyesMovement from './EyesMovement'
import Image from './Image'

const About = () => {
    return (
        <div className='relative top-[38vw] w-full px-[6vw] py-5  border-t-2 border-gray-300 bg-[#F1F1F1]'>
            <div className='flex justify-between'>
                <div className="w-1/2">
                    <p className='text-[1.2vw] font-medium tracking-tight leading-none'>About Us:</p>
                </div>
                <div className="w-1/2  flex justify-between">
                    <div className="w-1/2 flex flex-col gap-7">
                        <p className='text-[1.2vw] tracking-tighter px-[6px]'>
                            In Ukrainian, ochi - means eyes. It's not just a beautiful word, but our philosophy. Almost everything that needs to be communicated is better shown than explained.
                        </p>
                        <p className='text-[1.2vw] tracking-tighter px-[6px]'>
                            We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded ochi to help you persuade colleagues and clients by creating eye-opening presentations.
                        </p>
                    </div>
                    <div className="">
                        <button className="relative px-[1.2vw] text-[1vw] py-[0.5vw] overflow-hidden border-2 border-gray-300 rounded-full text-[#1e2124] transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                            <span className="relative z-10 tracking-wide font-medium">
                                Our Work
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <EyesMovement />
            <Image />

        </div>
    )
}

export default About
