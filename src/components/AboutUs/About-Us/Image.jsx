import React from 'react'
const Image = () => {
    return (
        <div className='w-full lg:h-[100vh]  h-[90vh] rounded-2xl overflow-hidden bg-[#f1f1f1] lg:mb-20 '>
            <img src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg" alt="" className='lg:block hidden w-full lg:h-[60vw] h-80 object-cover rounded-2xl'
                data-scroll
                data-scroll-section
                data-scroll-speed="-.2" />
            <img src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg" alt="" className='lg:hidden block w-full lg:h-[60vw] h-80 object-cover rounded-2xl'
                data-scroll
                data-scroll-section
                data-scroll-speed="-.1" 
                />
        </div>
    )
}

export default Image
