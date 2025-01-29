import React, {useEffect} from 'react'
import { getCalApi } from "@calcom/embed-react";

const BookAppointment = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" },
        },
      });
    })();
  }, []);

  return (
    <div className="flex xl:pb-[3vw] lg:flex-row flex-col lg:justify-between lg:items-center mt-3 lg:mb-[3vw] lg:pb-5   gap-5 ">
      {[
        "For public and private companies",
        "From the first pitch to IPO",
      ].map((item, index) => (
        <p className=" lg:my-2 lg:font-normal font-light ">{item}</p>
      ))}
      <button data-cal-link="wortaxgamechanger" data-cal-config='{"theme":"dark"}'
        className="relative w-fit px-5 lg:mb-0 mb-4  lg:py-2 py-0 overflow-hidden border border-zinc-800 rounded-full text-[#17191b] transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
        <span className="relative lg:text-sm text-xs z-10 tracking-wide font-medium">
          BOOK AN APPOINTMENT
        </span>
      </button>
    </div>
  )
}

export default BookAppointment
