import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const TheBlog = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
      <div className="w-full h-60 bg-neutral-900 bg-opacity-30 absolute hidden group-hover:flex items-center justify-center duration-500 ">
        {/* <p className="text-white text-xl">Read more</p> */}
      </div>
      <img src={props.Image} alt="" className="w-full h-60 object-cover" />
      <div className="p-4">
        <p className="text-blue-500 text-sm font-semibold uppercase">
          {props.catagory}
        </p>
        <h3 className="text-lg font-bold text-gray-900 mt-1">{props.title}</h3>
        <p className="text-sm tracking-wide text-[#5f656c]">
          {props.description}...
        </p>
        <Link
          to={props.BlogLink}
          className="mt-3 text-sm font-medium flex items-center hover:underline"
        >
          Read more <MdOutlineKeyboardDoubleArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default TheBlog;
