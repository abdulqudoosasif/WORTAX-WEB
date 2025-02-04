import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const RecommendedBlog = (props) => {
  return (
    <div className="flex flex-col mb-6 group">
      <Link to={props.BlogLink} className="text-[1.3vw]  font-medium group-hover:underline">
       {props.title}
      </Link>
      <p className="text-[0.8vw] tracking-wide text-[#5f656c]">
        {props.description} ...
      </p>
      <Link
        to={props.BlogLink}
        className="mt-3 text-[0.8vw] font-medium flex items-center group-hover:underline"
      >
        Read more <MdOutlineKeyboardDoubleArrowRight className="text-[1.2vw]" />
      </Link>
    </div>
  );
};

export default RecommendedBlog;
