import HeroContent from "../Global/HeroContent";

function WorkMain() {
  const item = ["Designing", "Unparalleled ", "Success Stories"];

  return (
    <div className="  bg-gray-50 relative z-10  lg:pb-[8vw] px-[5vw] ">
      <HeroContent item={item} />
    </div>
  );
}

export default WorkMain;
