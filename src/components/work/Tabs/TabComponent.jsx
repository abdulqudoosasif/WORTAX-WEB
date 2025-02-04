import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/img/worksection/1.png";
import img2 from "../../../assets/img/worksection/2.png";
import img3 from "../../../assets/img/worksection/3.png";
import img4 from "../../../assets/img/worksection/4.png";
import img5 from "../../../assets/img/worksection/5.png";
import img6 from "../../../assets/img/worksection/6.png";
import img7 from "../../../assets/img/worksection/7.png";
import img8 from "../../../assets/img/worksection/8.png";
import img9 from "../../../assets/img/worksection/9.png";
import img10 from "../../../assets/img/worksection/10.png";
import img11 from "../../../assets/img/worksection/12.png";
import img12 from "../../../assets/img/worksection/14.png";
import img13 from "../../../assets/img/worksection/11.png";
import img14 from "../../../assets/img/worksection/13.png";
import img15 from "../../../assets/img/worksection/15.png";
import img16 from "../../../assets/img/worksection/16.png";
import img17 from "../../../assets/img/worksection/14 copy.png";
import img18 from "../../../assets/img/worksection/17.png";
import { CgMouse } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [activeSection, setActiveSection] = useState("Projects");
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const caseStudyData = {
    ALL: [
      { img: img1, title: "AXCEND", description: "Axcend is a cutting-edge platform for...", link: "https://example.com/axcend" },
      { img: img2, title: "RECORD AI MUSIC", description: "Record AI Music allows users to...", link: "https://example.com/record-ai-music" },
      { img: img3, title: "SUCCESS IN TRUCKING", description: "Success in Trucking is a program designed to...", link: "https://example.com/success-in-trucking" },
      { img: img4, title: "JG", description: "JG is a branding project focused on...", link: "https://example.com/jg" },
      { img: img6, title: "LIGHTING RESELLERS", description: "Lighting Resellers is an e-commerce platform for...", link: "https://example.com/lighting-resellers" },
      { img: img14, title: "LYNC DENTAL", description: "Lync Dental provides innovative solutions for...", link: "https://example.com/lync-dental" },
      { img: img15, title: "GREEN ROOMS", description: "Green Rooms is a sustainable living initiative...", link: "https://example.com/green-rooms" },
      { img: img16, title: "WODKA SODA", description: "Wodka Soda is a modern beverage brand...", link: "https://example.com/wodka-soda" },
      { img: img17, title: "KISS MARKETERS", description: "Kiss Marketers is a digital marketing agency...", link: "https://example.com/kiss-marketers" },
      { img: img13, title: "STARFIRE SNOWBOARDS", description: "Starfire Snowboards offers high-performance snowboarding gear...", link: "https://example.com/starfire-snowboards" },
      { img: img18, title: "CODE BRAVE", description: "Code Brave is a coding bootcamp for...", link: "https://example.com/code-brave" },
    ],
    Branding: [{ img: img4, title: "Case Study 4", description: "JG is a branding project focused on...", link: "https://example.com/jg" }],
    Website: [{ img: img6, title: "Case Study 6", description: "Lighting Resellers is an e-commerce platform for...", link: "https://example.com/lighting-resellers" }],
    Decks: [{ img: img5, title: "Case 7", description: "This is a deck presentation for...", link: "https://example.com/deck-7" }],
  };

  const clientData = {
    ALL: [
      { img: img7, title: "Client 1", description: "Client 1 is a leading company in...", link: "https://example.com/client-1" },
      { img: img8, title: "Client 2", description: "Client 2 specializes in...", link: "https://example.com/client-2" },
      { img: img9, title: "Client 3", description: "Client 3 offers innovative solutions for...", link: "https://example.com/client-3" },
      { img: img10, title: "Client 4", description: "Client 4 is a food industry leader...", link: "https://example.com/client-4" },
      { img: img11, title: "Client 5", description: "Client 5 is a fintech company...", link: "https://example.com/client-5" },
      { img: img12, title: "Client 6", description: "Client 6 provides SaaS solutions...", link: "https://example.com/client-6" },
      { img: img13, title: "Client 7", description: "Client 7 is an e-commerce platform...", link: "https://example.com/client-7" },
    ],
    Food: [{ img: img10, title: "Client 4", description: "Client 4 is a food industry leader...", link: "https://example.com/client-4" }],
    Fintech: [{ img: img11, title: "Client 5", description: "Client 5 is a fintech company...", link: "https://example.com/client-5" }],
    SaaS: [{ img: img12, title: "Client 6", description: "Client 6 provides SaaS solutions...", link: "https://example.com/client-6" }],
    eCommerce: [{ img: img13, title: "Client 7", description: "Client 7 is an e-commerce platform...", link: "https://example.com/client-7" }],
  };

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      x: 0,
      y: 0,
      transition: { type: "spring", mass: 0.6 },
    },
    card: {
      opacity: 1,
      height: 40,
      width: 190,
      backgroundColor: "#C9FF00",
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 28 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  };

  const handleCardEnter = (title) => {
    setCursorText(title);
    setCursorVariant("card");
  };

  const handleCardLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setActiveTab("ALL"); 
  };

  const currentData = activeSection === "Projects" ? caseStudyData : clientData;

  return (
    <section
      className="px-[5vw] py-[5vw] pb-[7vw] rounded-b-3xl bg-neutral-900 min-h-[100vh] relative z-10"
      onMouseMove={handleMouseMove}
    >
      {/* {/ Custom Cursor /} */}
      <motion.div
        className="fixed z-20 pointer-events-none flex items-center justify-center rounded-xl text-center text-black"
        style={{
          top: "var(--mouse-y)",
          left: "var(--mouse-x)",
          transform: "translate(-50%, -50%)",
        }}
        variants={variants}
        animate={cursorVariant}
      >
        <span className="text-sm font-semibold">{cursorText}</span>
      </motion.div>

      {/* {/ Section Toggle /} */}
      <div className="flex justify-center items-center lg:gap-[2vw] gap-5">
        {["Projects", "Clients"].map((section) => (
          <h2
            key={section}
            className={`lg:text-[3.5vw] lg:my-0 text-[20px] my-5 font-semibold cursor-pointer border-b-2 -underline-offset-2 ${
              activeSection === section
                ? "text-neutral-50 border-neutral-50"
                : "text-neutral-500 border-neutral-500"
            }`}
            onClick={() => handleSectionChange(section)}
          >
            {section}
          </h2>
        ))}
      </div>

      {/* {/ Tabs /} */}
      <div className="mt-[2vw] flex items-center justify-center mb-[4vw]">
        {Object.keys(currentData).map((tab) => (
          <button
            key={tab}
            className={`lg:px-[1.45vw] px-2 py-0 lg:text-[1.3vw] text-[14px] text-nowrap rounded-sm ${
              activeTab === tab ? "text-white font-bold" : "text-neutral-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* {/ Content /} */}
      <div className="justify-center grid lg:grid-cols-2 md:grid-cols-2 lg:gap-[2vw] gap-5 mt-5">
        {currentData[activeTab]?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => handleCardEnter(item.title)}
            onMouseLeave={handleCardLeave}
            className="relative hover:z-10 overflow-hidden group"
          >
            <div className="lg:h-[32vw]  md:h-[400px] h-[300px] duration-300 rounded-3xl   overflow-hidden  group">
              <div className=" bg-black lg:h-[32vw]  md:h-[400px] h-[300px]  rounded-3xl flex items-center justify-center opacity-[0.3] duration-200 z-20  w-full top-0 left-0  absolute">
                <div className="flex flex-col items-center text-white text-[1.4vw]">
                  <IoIosArrowUp />
                  <CgMouse />
                  <IoIosArrowDown />
                </div>
              </div>
              <img
                className="w-full h-auto object-cover ease-linear transition-transform duration-[10s] lg:group-hover:translate-y-[calc(-100%+32vw)]"
                src={item.img}
                alt={`Tab ${activeTab} item ${index + 1}`}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-neutral-400 mt-2">{item.description}</p>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-[#C9FF00] text-black font-semibold rounded-lg hover:bg-[#B2E000] transition-colors"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TabComponent;