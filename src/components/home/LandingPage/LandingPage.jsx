import React from "react";
import HeroContent from "../../Global/HeroContent";
import BookAppointment from "./BookAppointment";
function LandingPage() {
  const item = ["Where Ideas", " Fuels Digital ", "Excellence"];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="h-full  relative z-10  px-[5vw] bg-gray-50"
    >
      <HeroContent item={item} />
      <div className="border-t-[1px] border-black mt-[11vw]"></div>
      <BookAppointment />
    </div>
  );
}

export default LandingPage;
