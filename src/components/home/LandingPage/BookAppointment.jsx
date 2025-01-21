import React from 'react'
import { PopupButton } from "react-calendly";

const BookAppointment = () => {
  return (
    <div className="lg:flex justify-between pb-[50px] items-center mt-3 lg:mb-[3vw] lg:mx-16 mx-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className=" my-2">{item}</p>
        ))}
        <PopupButton
          url="https://calendly.com/emhamza-491"
          rootElement={document.getElementById("root")}
          className="relative px-5 text-sm py-2 overflow-hidden border border-zinc-800 rounded-full text-[#17191b] transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
          text={
            <span className="relative z-10 tracking-wide font-medium">
              BOOK AN APPOINTMENT
            </span>
          }
        />
      </div>
  )
}

export default BookAppointment
