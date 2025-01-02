import React from "react";

const WalletHoverEffect = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-80 h-40 group">
        {/* Main card */}
        <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center z-10 group-hover:skew-y-2 transition-transform duration-300">
          <h2 className="text-lg font-semibold mb-4">Mobile Design</h2>
          <div>
            {/* Add your mobile icon/image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-16 h-16 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9v.008h.008V9h-.008zM4.5 8.25v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5m-15 0A1.5 1.5 0 016 6.75h12a1.5 1.5 0 011.5 1.5m-15 0h15M9 12h6"
              />
            </svg>
          </div>
        </div>

        {/* Colored layers */}
        <div className="absolute inset-0 mb-1 bg-yellow-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-6 group-hover:skew-y-6"></div>
        <div className="absolute inset-0 mb-1 bg-purple-400 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-4 group-hover:skew-y-4"></div>
        <div className="absolute inset-0 mb-1 bg-teal-200 rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:skew-y-2"></div>
      </div>
    </div>
  );
};

export default WalletHoverEffect;
