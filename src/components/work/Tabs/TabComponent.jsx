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
import img12 from "../../../assets/img/worksection/1.png";
import img13 from "../../../assets/img/worksection/11.png";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [activeSection, setActiveSection] = useState("Projects");
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const caseStudyData = {
    ALL: [
      { img: img1, title: "Case Study 1" },
      { img: img2, title: "We want design 2" },
      { img: img3, title: "Case Study 3" },
      { img: img4, title: "Case Study 4" },
      { img: img6, title: "Case Study 6" },
      { img: img5, title: "Case Study 7" },
    ],
    Branding: [{ img: img4, title: "Case Study 4" }],
    Website: [{ img: img6, title: "Case Study 6" }],
    Decks: [{ img: img5, title: "Case 7" }],
  };

  const clientData = {
    ALL: [
      { img: img7, title: "Client 1" },
      { img: img8, title: "Client 2" },
      { img: img9, title: "Client 3" },
      { img: img10, title: "Client 4" },
      { img: img11, title: "Client 5" },
      { img: img12, title: "Client 6" },
      { img: img13, title: "Client 7" },
    ],
    Food: [{ img: img10, title: "Client 4" }],
    Fintech: [{ img: img11, title: "Client 5" }],
    SaaS: [{ img: img12, title: "Client 6" }],
    eCommerce: [{ img: img13, title: "Client 7" }],
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
    setActiveTab("ALL"); // Reset activeTab to 'ALL' when section changes
  };

  const currentData = activeSection === "Projects" ? caseStudyData : clientData;

  return (
    <section
      className="px-[5vw] py-[5vw] pb-[7vw] rounded-b-3xl bg-neutral-900 min-h-[100vh] relative z-10"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
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

      {/* Section Toggle */}
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

      {/* Tabs */}
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

      {/* Content */}
      <div className="justify-center grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[2vw] gap-5 mt-5">
        {currentData[activeTab]?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => handleCardEnter(item.title)}
            onMouseLeave={handleCardLeave}
            className="relative hover:z-10 group"
          >
            <div className="lg:h-[32vw] md:h-[400px] h-[300px] duration-300 rounded-2xl hover:shadow-2xl hover:shadow-black overflow-hidden  group">
              <img
                className="w-full h-auto object-cover ease-linear transition-transform duration-[10s] lg:group-hover:translate-y-[calc(-100%+32vw)]"
                src={item.img}
                alt={`Tab ${activeTab} item ${index + 1}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TabComponent;