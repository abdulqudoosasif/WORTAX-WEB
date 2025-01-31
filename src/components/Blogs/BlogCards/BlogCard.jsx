import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/Service/service1.jpg";

function BlogCard() {
  return (
    <div className="p-[5vw] bg-black z-10 relative">
      {/* Main Articles */}
      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Articles Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Article 1 */}
          <div className="relative bg-white h-[60vh] rounded-lg shadow-md overflow-hidden group">
            <div className="w-full h-[50vh] bg-black bg-opacity-70 absolute hidden group-hover:flex items-center justify-center duration-500">
              <p className="text-white text-3xl">Read more</p>
            </div>
            <img src={image} alt="" className="w-full h-[50vh] object-cover" />

            <div className="p-4">
              <p className="text-blue-500 text-sm font-semibold">Company</p>
              <h3 className="text-lg font-bold text-gray-900 mt-1">
                How Travel Writer and Vlogger Welmis Gutierrez Overcomes
                Self-Doubt
              </h3>
            </div>
          </div>
        </div>

        {/* Staff Picks Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">⭐ Recomendations</h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-7 justify-center items-center mt-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={image} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-blue-500 text-sm font-semibold">Company</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">
              How Travel Writer and Vlogger Welmis Gutierrez Overcomes
              Self-Doubt
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={image} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-blue-500 text-sm font-semibold">Company</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">
              How Travel Writer and Vlogger Welmis Gutierrez Overcomes
              Self-Doubt
            </h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={image} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-blue-500 text-sm font-semibold">Company</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">
              How Travel Writer and Vlogger Welmis Gutierrez Overcomes
              Self-Doubt
            </h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={image} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-blue-500 text-sm font-semibold">Company</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">
              How Travel Writer and Vlogger Welmis Gutierrez Overcomes
              Self-Doubt
            </h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={image} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-blue-500 text-sm font-semibold">Company</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">
              How Travel Writer and Vlogger Welmis Gutierrez Overcomes
              Self-Doubt
            </h3>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={image} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-blue-500 text-sm font-semibold">Company</p>
            <h3 className="text-lg font-bold text-gray-900 mt-1">
              How Travel Writer and Vlogger Welmis Gutierrez Overcomes
              Self-Doubt
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
