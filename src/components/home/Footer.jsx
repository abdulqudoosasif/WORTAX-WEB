import React from 'react';

const Footer = () => {
  return (
    <footer 
    data-scroll
    data-scroll-section
    data-scroll-speed="-.8"
    className="lg:bg-neutral-900 md:bg-neutral-900 bg-gray-50 lg:text-neutral-100 md:text-neutral-100 text-neutral-900  py-[200px] min-h-[100vh]  flex items-center">
      <div className="container mx-auto px-6">
        <div className="lg:flex md:flex-wrap justify-between">
          {/* Left Section */}
          <div className="space-y-4 mt-14 lg:w-[25vw]">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 rounded-full h-8 w-8"></div>
              <span className="lg:text-[1.6vw] text-xl lg:leading-[1.6vw] font-bold">WORTAX <br/>IT SOLUTION</span>
            </div>
            <p className="text-gray-400 text-md">
              Your on-demand design team producing quality designs that drive results
            </p>
            <p className="font-medium">+1 (205) 687-8151</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-8 lg:mb-0 mb-8 text-sm">
            <div className='flex flex-col items-center'>
              <h3 className="font-bold lg:text-[1.4vw] mb-2">Design by</h3>
              <ul className="space-y-4 text-gray-400">
                <li className='lg:text-[1.2vw] mt-2'>Locations</li>
                <li className='lg:text-[1.2vw] mt-2'>Industries</li>
                <li className='lg:text-[1.2vw] mt-2'>Use cases</li>
                <li className='lg:text-[1.2vw] mt-2'>Services</li>
              </ul>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className="font-bold lg:text-[1.4vw] mb-2">Resources</h3>
              <ul className="space-y-4 text-gray-400">
                <li className='lg:text-[1.2vw] mt-2'>Blog</li>
                <li className='lg:text-[1.2vw] mt-2'>Podcast</li>
                <li className='lg:text-[1.2vw] mt-2'>E-book</li>
                <li className='lg:text-[1.2vw] mt-2'>Guides</li>
              </ul>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className="font-bold lg:text-[1.4vw] mb-2">Company</h3>
              <ul className="space-y-4 text-gray-400">
                <li className='lg:text-[1.2vw] mt-2'>Case study</li>
                <li className='lg:text-[1.2vw] mt-2'>Portfolio</li>
                <li className='lg:text-[1.2vw] mt-2'>Careers</li>
                <li className='lg:text-[1.2vw] mt-2'>Contact</li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-right space-y-4">
            <h3 className="lg:text-[3vw] lg:leading-[2.8vw] text-2xl text-left font-bold">
              Let’s build  something <br /> great
            </h3>
            <a
              href="#"
              className="text-blue-500 font-bold lg:text-[2vw] text-xl flex items-center space-x-2 hover:underline"
            >
              <span>let's talk</span>
              <span className="text-xl">&#8599;</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" border-t border-gray-800 mt-[6vw] pt-6 text-sm lg:flex justify-between">
          <p className="text-gray-400">Wortax IT Solution © 2024</p>
          <div className="flex mt-4 lg:mt-0 space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Manage Subscription
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Services
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
