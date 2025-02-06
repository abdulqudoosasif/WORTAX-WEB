import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/img/worksection/1-min.png";
import img2 from "../../../assets/img/worksection/2-min.png";
import img3 from "../../../assets/img/worksection/3-min.png";
import img4 from "../../../assets/img/worksection/4-min.png";
import img5 from "../../../assets/img/worksection/5-min.png";
import img6 from "../../../assets/img/worksection/6-min.png";
import img7 from "../../../assets/img/worksection/7-min.png";
import img8 from "../../../assets/img/worksection/8-min.png";
import img9 from "../../../assets/img/worksection/9-min.png";
import img10 from "../../../assets/img/worksection/10-min.png";
import img11 from "../../../assets/img/worksection/12-min.png";
import img12 from "../../../assets/img/worksection/14-min.png";
import img13 from "../../../assets/img/worksection/11-min.png";
import img14 from "../../../assets/img/worksection/13-min.png";
import img15 from "../../../assets/img/worksection/15-min.png";
import img16 from "../../../assets/img/worksection/16-min.png";
import img17 from "../../../assets/img/worksection/14 copy-min.png";
import img18 from "../../../assets/img/worksection/17-min.png";

import Feedback1 from '../../../assets/img/Review/1.png';
import Feedback2 from '../../../assets/img/Review/2.png';
import Feedback3 from '../../../assets/img/Review/3.png';
import Feedback4 from '../../../assets/img/Review/4.png';
import Feedback5 from '../../../assets/img/Review/5.png';
import Feedback6 from '../../../assets/img/Review/6.png';
import Feedback7 from '../../../assets/img/Review/7.png';
import Feedback8 from '../../../assets/img/Review/8.png';
import Feedback9 from '../../../assets/img/Review/9.png';
import Feedback10 from '../../../assets/img/Review/10.png';
import Feedback11 from '../../../assets/img/Review/11.png';
import Feedback12 from '../../../assets/img/Review/12.png';
import Feedback13 from '../../../assets/img/Review/13.png';
import Feedback14 from '../../../assets/img/Review/14.png';

import { CgMouse } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

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
    WooCommerce: [{ img: img4, title: "Case Study 4", description: "JG is a branding project focused on...", link: "https://example.com/jg" }],
    SmallBusiness: [{ img: img6, title: "Case Study 6", description: "Lighting Resellers is an e-commerce platform for...", link: "https://example.com/lighting-resellers" }],
  };

  const clientData = {
    ALL: [
      { img: Feedback1, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback12, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback3, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback4, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback14, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback6, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback7, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback11, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback9, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback10, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback8, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback5, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback13, link: "https://www.upwork.com/freelancers/aaqibali" },
      { img: Feedback2, link: "https://www.upwork.com/freelancers/aaqibali" },
    ],
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
        {["Projects", "Feedbacks"].map((section) => (
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
            onMouseEnter={() => handleCardEnter(item.title || "Feedback")}
            onMouseLeave={handleCardLeave}
            className={`relative hover:z-10 overflow-hidden border border-neutral-400 rounded-3xl group ${
              activeSection === "Feedbacks" ? "feedback-item" : ""
            }`}
          >
            {activeSection === "Projects" ? (
              <>
                <div className="lg:h-[32vw] md:h-[400px] h-[300px] duration-300 rounded-t-3xl overflow-hidden group">
                  <div className="bg-black lg:h-[32vw] md:h-[400px] h-[300px] rounded-t-3xl flex items-center justify-center lg:group-hover:opacity-[0.1] opacity-[0.3] duration-200 z-20 w-full top-0 left-0 absolute">
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
                <div className="m-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-neutral-400 mt-2">{item.description}</p>
                  <Link
                    to={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 items-center w-fit mt-4 py-2 text-white underline font-light rounded-lg hover:text-blue-500"
                  >
                    <p>Visit Site</p> <p><BsArrowUpRight className="text-[1vw]" /></p>
                  </Link>
                </div>
              </>
            ) : (
              // Feedback Tab Design
              <div className="flex flex-col  justify-center p-[1vw]">
                <img
                  src={item.img}
                  alt={`Feedback ${index + 1}`}
                  className="max-w-full max-h-[150px] rounded-lg object-contain"
                />
                <Link
                    to={item.link}
                    className="flex  gap-1 items-center w-fit mt-[0.8vw]  text-white underline font-light rounded-lg hover:text-blue-500"
                  >
                    <p>Visit Profile</p> <p><BsArrowUpRight className="text-[1vw]" /></p>
                  </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TabComponent;