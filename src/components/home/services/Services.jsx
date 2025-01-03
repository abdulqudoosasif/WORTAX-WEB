import React from "react";
import ServicesHeader from "./ServicesHeader";

const WalletHoverEffect = () => {
  return (
    <div className="flex flex-col py-10 min-h-screen bg-gray-50">
      <ServicesHeader />
      <div className="flex items-center justify-evenly flex-wrap px-8">
        <div className="relative lg:w-[calc(50%-50px)] md:w-[calc(100%-50px)] w-[calc(100%-40px)] my-10 h-48 group hover:skew-x-3 perspective-1000 scale-y-110">
          {/* {/ Card wrapper for hover effect /} */}
          <div className="relative w-full h-full transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-40 group-hover:translate-z-20">
            {/* {/ Colored layers /} */}
            <div className="absolute inset-0 mb-1 bg-yellow-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-8 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-purple-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-6 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-teal-200 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-4 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-pink-800 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 z-0"></div>

            {/* {/ Main card /} */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center z-10 border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Mobile Design</h2>
              <div>
                {/* {/ Mobile icon /} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-28 h-28 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9v.008h.008V9h-.008zM4.5 8.25v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5m-15 0A1.5 1.5 0 016 6.75h12a1.5 1.5 0 011.5 1.5m-15 0h15M9 12h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[calc(50%-50px)] md:w-[calc(100%-50px)] w-[calc(100%-40px)] my-10 h-48 group hover:skew-x-3 perspective-1000 scale-y-110">
          {/* {/ Card wrapper for hover effect /} */}
          <div className="relative w-full h-full transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-40 group-hover:translate-z-20">
            {/* {/ Colored layers /} */}
            <div className="absolute inset-0 mb-1 bg-yellow-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-8 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-purple-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-6 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-teal-200 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-4 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-pink-800 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 z-0"></div>

            {/* {/ Main card /} */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center z-10 border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Mobile Design</h2>
              <div>
                {/* {/ Mobile icon /} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-28 h-28 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9v.008h.008V9h-.008zM4.5 8.25v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5m-15 0A1.5 1.5 0 016 6.75h12a1.5 1.5 0 011.5 1.5m-15 0h15M9 12h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[calc(50%-50px)] md:w-[calc(100%-50px)] w-[calc(100%-40px)] my-10 h-48 group hover:skew-x-3 perspective-1000 scale-y-110">
          {/* {/ Card wrapper for hover effect /} */}
          <div className="relative w-full h-full transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-40 group-hover:translate-z-20">
            {/* {/ Colored layers /} */}
            <div className="absolute inset-0 mb-1 bg-yellow-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-8 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-purple-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-6 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-teal-200 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-4 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-pink-800 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 z-0"></div>

            {/* {/ Main card /} */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center z-10 border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Mobile Design</h2>
              <div>
                {/* {/ Mobile icon /} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-28 h-28 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9v.008h.008V9h-.008zM4.5 8.25v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5m-15 0A1.5 1.5 0 016 6.75h12a1.5 1.5 0 011.5 1.5m-15 0h15M9 12h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[calc(50%-50px)] md:w-[calc(100%-50px)] w-[calc(100%-40px)] my-10 h-48 group hover:skew-x-3 perspective-1000 scale-y-110">
          {/* {/ Card wrapper for hover effect /} */}
          <div className="relative w-full h-full transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-40 group-hover:translate-z-20">
            {/* {/ Colored layers /} */}
            <div className="absolute inset-0 mb-1 bg-yellow-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-8 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-purple-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-6 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-teal-200 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-4 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-pink-800 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 z-0"></div>

            {/* {/ Main card /} */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center z-10 border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Mobile Design</h2>
              <div>
                {/* {/ Mobile icon /} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-28 h-28 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9v.008h.008V9h-.008zM4.5 8.25v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5m-15 0A1.5 1.5 0 016 6.75h12a1.5 1.5 0 011.5 1.5m-15 0h15M9 12h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[calc(50%-50px)] md:w-[calc(100%-50px)] w-[calc(100%-40px)] my-10 h-48 group hover:skew-x-3 perspective-1000 scale-y-110">
          {/* {/ Card wrapper for hover effect /} */}
          <div className="relative w-full h-full transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-40 group-hover:translate-z-20">
            {/* {/ Colored layers /} */}
            <div className="absolute inset-0 mb-1 bg-yellow-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-8 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-purple-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-6 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-teal-200 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-4 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-pink-800 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 z-0"></div>

            {/* {/ Main card /} */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center z-10 border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Mobile Design</h2>
              <div>
                {/* {/ Mobile icon /} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-28 h-28 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9v.008h.008V9h-.008zM4.5 8.25v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5m-15 0A1.5 1.5 0 016 6.75h12a1.5 1.5 0 011.5 1.5m-15 0h15M9 12h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[calc(50%-50px)] md:w-[calc(100%-50px)] w-[calc(100%-40px)] my-10 h-48 group hover:skew-x-3 perspective-1000 scale-y-110">
          {/* {/ Card wrapper for hover effect /} */}
          <div className="relative w-full h-full transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-40 group-hover:translate-z-20">
            {/* {/ Colored layers /} */}
            <div className="absolute inset-0 mb-1 bg-yellow-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-8 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-purple-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-6 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-teal-200 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-4 z-0"></div>
            <div className="absolute inset-0 mb-1 bg-pink-800 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 z-0"></div>

            {/* {/ Main card /} */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center z-10 border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Mobile Design</h2>
              <div>
                {/* {/ Mobile icon /} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-28 h-28 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9v.008h.008V9h-.008zM4.5 8.25v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5m-15 0A1.5 1.5 0 016 6.75h12a1.5 1.5 0 011.5 1.5m-15 0h15M9 12h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHoverEffect;
