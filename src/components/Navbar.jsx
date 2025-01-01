import React from "react";
import Logp from "../assets/img/Logo.png"

function Navbar() {
  return (
    <div className="px-16 h-[8vh] w-full  flex items-center justify-between fixed">
      <div className="logo w-[130px]">
       <img src={Logp} className=""/>
      </div>
      <div className="flex gap-10">
        {["Services","Our work","About us","Insights","Contact us"].map((item,index)=>(
           <a key={index} className={`text-md capitalize ${index === 4 && 'ml-32'}`}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
