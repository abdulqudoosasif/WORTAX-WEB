import React from 'react'
const Image = () => {
    return (
        <div className='w-full lg:h-[100vh] h-96 rounded-2xl overflow-hidden bg-[#f1f1f1] lg:mb-20 mb-[88px]'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg" alt="" className='w-full lg:h-[60vw] h-80 object-cover rounded-2xl'
                data-scroll
                data-scroll-section
                data-scroll-speed="-.2" />
        </div>
    )
}

export default Image
