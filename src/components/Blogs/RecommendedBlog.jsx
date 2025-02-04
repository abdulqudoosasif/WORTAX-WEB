import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const RecommendedBlog = (props) => {
  return (
    <div className="flex flex-col mb-6 group">
      <h4 className="text-xl font-medium group-hover:underline">
       {props.title}
      </h4>
      <p className="text-sm tracking-wide text-[#5f656c]">
        {props.description} ...
      </p>
      <Link
        to={props.BlogLink}
        className="mt-3 text-sm font-medium flex items-center group-hover:underline"
      >
        Read more <MdOutlineKeyboardDoubleArrowRight size={18} />
      </Link>
    </div>
  );
};

export default RecommendedBlog;
