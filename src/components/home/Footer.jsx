import React from 'react';
import logoimg from '../../assets/img/logo-img.png';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer 
    data-scroll
    data-scroll-section
    data-scroll-speed="-.8"
    className=" bg-gray-50 justify-center relative
     text-neutral-900  py-[200px]  px-5 lg:px-[5vw] min-h-[100vh] ">
      <div className="px-6">
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5">
          {/* Left Section */}
          <div className="space-y-4 lg:mt-0 md:mt-0 mt-14 lg:w-[25vw]">
            <div className="flex items-center space-x-2">
              <div className=" rounded-full ">
                <img src={logoimg} alt="" className='w-16 h-16'/>
              </div>
              <span className="lg:text-[1.6vw] text-xl lg:leading-[1.6vw] font-bold">WORTAX <br/>IT SOLUTION</span>
            </div>
            <p className="text-gray-400 text-md">
              Your on-demand design team producing quality designs that drive results
            </p>
            <p className="font-medium">+1 (205) 687-8151</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-900 lg:text-[1.2vw] bg-gray-300 p-2 rounded-lg hover:text-white">
              <FaFacebookF />
              </a>
              <a href="#" className="text-neutral-800 lg:text-[1.2vw] bg-gray-300 p-2 rounded-lg hover:text-white">
              <FaTwitter />

              </a>
              <a href="#" className="text-neutral-800 lg:text-[1.2vw] bg-gray-300 p-2 rounded-lg hover:text-white">
              <FaInstagram />
              </a>
              <a href="#" className="text-neutral-800 lg:text-[1.2vw] bg-gray-300 p-2 rounded-lg  hover:text-white">
              <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-8 lg:mb-0 mb-8 text-sm">
            <div className='flex flex-col '>
              <h3 className="font-bold lg:text-[1.4vw] mb-2">Design by</h3>
              <ul className="space-y-4 text-gray-400">
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Locations</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Industries</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Use cases</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Services</li>
              </ul>
            </div>
            <div className='flex flex-col '>
              <h3 className="font-bold lg:text-[1.4vw] mb-2">Resources</h3>
              <ul className="space-y-4 text-gray-400">
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Blog</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Podcast</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>E-book</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Guides</li>
              </ul>
            </div>
            <div className='flex flex-col '>
              <h3 className="font-bold lg:text-[1.4vw] mb-2">Company</h3>
              <ul className="space-y-4 text-gray-400">
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Case study</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Portfolio</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Careers</li>
                <li className='lg:text-[1vw] mt-2 l:mt-[2vw]'>Contact</li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-right space-y-4">
            <h3 className="lg:text-[2.3vw] lg:leading-[2.vw] text-2xl text-left font-bold">
              Let's build  something <br /> great
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
        <div className=" border-t border-gray-800 lg:mt-[6vw] mt-6 pt-6 text-sm lg:flex justify-between">
          <p className="text-gray-400">Wortax IT Solution © 2025</p>
          <div className="lg:flex hidden mt-4 lg:mt-0 space-x-6">
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