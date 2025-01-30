import React from "react";
import { Link } from "react-router-dom";
function BlogCard() {
  return (
    <div className="flex flex-col bg-black rounded-b-3xl relative z-10 items-center justify-center py-20 ">
      <div className="flex sticky top-[7vh] flex-col justify-center items-center gap-3 flex-wrap mb-[4vw]">
        <h2 className="lg:text-[3vw] text-3xl text-white  font-semibold">
          THE BLOGS
        </h2>
        <p className="lg:text-[1vw] text-xs text-white lg:mt-[1.2vw]  tracking-wide text-center">
          WE PLAN, DESIGN, BUILD AND MARKET HIGH QUALITY PRODUCTS
        </p>
      </div>
      <div className="flex flex-col gap-[13vh]">
        <div className="card  overflow-hidden group sticky top-[20vh] rounded-3xl h-[72vh] w-[80vw] bg-blue-500">
          <img
            className="h-full w-full duration-1000 lg:group-hover:scale-[1.2] object-cover object-center filter grayscale group-hover:filter-none "
            src="https://static.wixstatic.com/media/955908_0e7b2334d4c94afaa997f974522bd2de~mv2.jpg/v1/fill/w_726,h_1434,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Landscape4.jpg"
            alt=""
          />
            <div className="bg-[#0000007c] flex h-full w-full absolute top-0 ">
            
              {/* <!-- Left Section --> */}
              <div className="w-1/2 bg-cover flex flex-col justify-between bg-center p-10 text-white">
               <div>
               <h2 className="text-[3vw] font-semibold">Business Strategy</h2>
               <p className="text-[1.7vw] mb-4">Clarity in Action.</p>
               </div>
            <div>
            <p className="text-[1.3vw]">
                  We help you navigate the complexities of growth with
                  strategies that are simple, actionable, and scalable. NOIZE®
                  ensures your business stays focused on what matters most.
                </p>
                <ul className="mt-4 space-y-2 text-[1.2vw]">
                  <li>✱ Market Research</li>
                  <li>✱ Business Model Development</li>
                  <li>✱ Growth Strategy</li>
                  <li>✱ KPI Setting & Performance Metrics</li>
                </ul>
            </div>
              </div>

              {/* <!-- Right Section --> */}
              <div
                className="w-1/2 bg-cover  p-10 text-white flex flex-col items-end justify-end"
              >
                <Link
                  
                  className="mt-4 inline-block w-fit bg-white text-black py-2 px-4 rounded-md shadow-md hover:bg-red-500 transition"
                >
                  Explore Strategy →
                </Link>
              </div>
          </div>
        </div>
        <div className="card  overflow-hidden  sticky top-[22vh] group rounded-3xl h-[72vh] w-[80vw] bg-blue-500">
          <img
            className="h-full w-full duration-1000 lg:group-hover:scale-[1.2] object-cover object-center filter grayscale group-hover:filter-none"
            src="https://static.wixstatic.com/media/955908_53bdf2fe123f47a299445a6b4eac8408~mv2.jpg/v1/fill/w_726,h_1434,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%20890.jpg"
            alt=""
          />
            <div className="bg-[#0000007c] flex h-full w-full absolute top-0 ">
            
              {/* <!-- Left Section --> */}
              <div className="w-1/2 bg-cover flex flex-col justify-between bg-center p-10 text-white">
               <div>
               <h2 className="text-[3vw] font-semibold">Business Strategy</h2>
               <p className="text-[1.7vw] mb-4">Clarity in Action.</p>
               </div>
            <div>
            <p className="text-[1.3vw]">
                  We help you navigate the complexities of growth with
                  strategies that are simple, actionable, and scalable. NOIZE®
                  ensures your business stays focused on what matters most.
                </p>
                <ul className="mt-4 space-y-2 text-[1.2vw]">
                  <li>✱ Market Research</li>
                  <li>✱ Business Model Development</li>
                  <li>✱ Growth Strategy</li>
                  <li>✱ KPI Setting & Performance Metrics</li>
                </ul>
            </div>
              </div>

              {/* <!-- Right Section --> */}
              <div
                className="w-1/2 bg-cover  p-10 text-white flex flex-col items-end justify-end"
              >
                <Link
                  
                  className="mt-4 inline-block w-fit bg-white text-black py-2 px-4 rounded-md shadow-md hover:bg-red-500 transition"
                >
                  Explore Strategy →
                </Link>
              </div>
          </div>
        </div>
        <div className="card  overflow-hidden  sticky top-[24vh] group rounded-3xl h-[72vh] w-[80vw] bg-blue-500">
          <img
            className="h-full w-full duration-1000 lg:group-hover:scale-[1.2] object-cover object-center filter grayscale group-hover:filter-none"
            src="https://static.wixstatic.com/media/955908_7ae609150ad24b1bbf2bc40de5bb174c~mv2.jpg/v1/fill/w_726,h_1434,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DRK_LBL_the-brand%20(8)%201.jpg"
            alt=""
          />
            <div className="bg-[#0000007c] flex h-full w-full absolute top-0 ">
            
              {/* <!-- Left Section --> */}
              <div className="w-1/2 bg-cover flex flex-col justify-between bg-center p-10 text-white">
               <div>
               <h2 className="text-[3vw] font-semibold">Business Strategy</h2>
               <p className="text-[1.7vw] mb-4">Clarity in Action.</p>
               </div>
            <div>
            <p className="text-[1.3vw]">
                  We help you navigate the complexities of growth with
                  strategies that are simple, actionable, and scalable. NOIZE®
                  ensures your business stays focused on what matters most.
                </p>
                <ul className="mt-4 space-y-2 text-[1.2vw]">
                  <li>✱ Market Research</li>
                  <li>✱ Business Model Development</li>
                  <li>✱ Growth Strategy</li>
                  <li>✱ KPI Setting & Performance Metrics</li>
                </ul>
            </div>
              </div>

              {/* <!-- Right Section --> */}
              <div
                className="w-1/2 bg-cover  p-10 text-white flex flex-col items-end justify-end"
              >
                <Link
                  
                  className="mt-4 inline-block w-fit bg-white text-black py-2 px-4 rounded-md shadow-md hover:bg-red-500 transition"
                >
                  Explore Strategy →
                </Link>
              </div>
          </div>
        </div>
        <div className="card  overflow-hidden  sticky top-[26vh] group rounded-3xl h-[72vh] w-[80vw] bg-blue-500">
          <img
            className="h-full w-full duration-1000 lg:group-hover:scale-[1.2] object-cover object-center filter grayscale group-hover:filter-none"
            src="https://static.wixstatic.com/media/955908_8ec3ca6f371740a08acae8e0055c2b17~mv2.jpg/v1/fill/w_726,h_1434,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Technology.jpg"
            alt=""
          />
          <div className="bg-[#0000007c] flex h-full w-full absolute top-0 ">
            
              {/* <!-- Left Section --> */}
              <div className="w-1/2 bg-cover flex flex-col justify-between bg-center p-10 text-white">
               <div>
               <h2 className="text-[3vw] font-semibold">Business Strategy</h2>
               <p className="text-[1.7vw] mb-4">Clarity in Action.</p>
               </div>
            <div>
            <p className="text-[1.3vw]">
                  We help you navigate the complexities of growth with
                  strategies that are simple, actionable, and scalable. NOIZE®
                  ensures your business stays focused on what matters most.
                </p>
                <ul className="mt-4 space-y-2 text-[1.2vw]">
                  <li>✱ Market Research</li>
                  <li>✱ Business Model Development</li>
                  <li>✱ Growth Strategy</li>
                  <li>✱ KPI Setting & Performance Metrics</li>
                </ul>
            </div>
              </div>

              {/* <!-- Right Section --> */}
              <div
                className="w-1/2 bg-cover  p-10 text-white flex flex-col items-end justify-end"
              >
                <Link
                  
                  className="mt-4 inline-block w-fit bg-white text-black py-2 px-4 rounded-md shadow-md hover:bg-red-500 transition"
                >
                  Explore Strategy →
                </Link>
              </div>
          </div>
        </div>
        <div className="card  overflow-hidden  sticky top-[26vh]"></div>
      </div>
    </div>
  );
}

export default BlogCard;
