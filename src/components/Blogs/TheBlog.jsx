import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const TheBlog = (props) => {
  return (
    <div className="bg-white lg:rounded-[0.5vw] rounded-lg shadow-md overflow-hidden relative group">
      <div className="w-full h-[26vh] bg-neutral-900 bg-opacity-30 absolute hidden lg:group-hover:flex items-center justify-center duration-500 ">
        {/* <p className="text-white text-xl">Read more</p> */}
      </div>
      <img src={props.Image} alt="" className="w-full lg:h-[26vh] h-44 object-cover" />
      <div className="lg:p-[1vw] p-4">
        <p className="text-blue-500 text-sm lg:text-[0.83vw] lg:leading-[0.83vw] font-semibold uppercase">
          {props.catagory}
        </p>
        <h3 className="text-lg lg:text-[1.07vw] lg:leading-[1.5vw] font-bold text-gray-900 mt-1">{props.title}</h3>
        <p className="text-sm lg:text-[0.83vw] lg:leading-[1vw] tracking-wide text-[#5f656c]">
          {props.description}...
        </p>
        <Link
          to={props.BlogLink}
          className="mt-3 lg:text-[0.83vw] lg:leading-[1vw] text-sm font-medium flex items-center hover:underline"
        >
          Read more <MdOutlineKeyboardDoubleArrowRight className="text-[1.2vw]" />
        </Link>
      </div>
    </div>
  );
};

export default TheBlog;


