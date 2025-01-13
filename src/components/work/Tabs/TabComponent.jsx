import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [activeSection, setActiveSection] = useState('Case Study');
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const caseStudyData = {
    ALL: [
      { img: 'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/668795cd4ea05dbecc160678_UPSIDE%20Foods%20-%20Home%201-min-p-1080.webp',title: "Case Study 1" },
      { img: 'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/668795cd4ea05dbecc160678_UPSIDE%20Foods%20-%20Home%201-min-p-1080.webp',title: "we want design 2" },
      { img: 'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/668795cd4ea05dbecc160678_UPSIDE%20Foods%20-%20Home%201-min-p-1080.webp',title: "Case Study 3" },
    ],
    Branding: [
      { img: 'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/668795cd4ea05dbecc160678_UPSIDE%20Foods%20-%20Home%201-min-p-1080.webp', title: "Case Study 4" },
    ],
    "Product UI/UX": [
      { img: 'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp' ,title: "Case Study 5"},
    ],
    Website: [
      { img: 'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp', title: "Case Study 6" },
    ],
    Decks: [
      { img: 'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/668795cd4ea05dbecc160678_UPSIDE%20Foods%20-%20Home%201-min-p-1080.webp', title: "Case Study 7" },
    ],
  };

  const clientData = {
    ALL:  [
      { img:  'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp', title: "Client 1" },
      { img:  'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp', title: "Client 2" },
      { img:   'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp', title: "Client 3" },
    ],
    Food: [
      { img:  'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp', title: "Client 4" },
    ],
    Fintech: [{ img:'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp', title: "Client 5"   },],
    SaaS: [{ img:   'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp', title: "Client 6"   },],
    eCommerce: [{ img:  'https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/66420ac36fe417df0e5cd373_Flo%20(1)%201-p-1080.webp' ,title: "Client 7"  },],
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

  const currentData = activeSection === 'Case Study' ? caseStudyData : clientData;

  return (
    <section className="px-[6vw] py-[2vw] bg-[#F5F5F5]  h-[100vh] relative z-10"  onMouseMove={handleMouseMove}>

          {/* Custom Cursor */}
          <motion.div
        className="fixed z-10 pointer-events-none flex items-center justify-center rounded-xl  text-center text-black "
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
      <div className="flex items-center gap-5">
        {['Case Study', 'Clients'].map((section) => (
          <h2
            key={section}
            className={`text-[4vw] font-semibold cursor-pointer ${
              activeSection === section ? 'text-neutral-900' : 'text-neutral-500'
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </h2>
        ))}
        <div className="h-[1vw] w-[1vw] rounded-full bg-slate-300"></div>
      </div>

      {/* Tabs */}
      <div className="mt-[2vw]">
        {Object.keys(currentData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-0 text-[1.3vw] rounded-sm ${
              activeTab === tab ? 'text-black font-bold' : 'text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full grid lg:grid-cols-3 gap-5 justify-evenly mt-5">
        {currentData[activeTab]?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => handleCardEnter(item.title)}
            onMouseLeave={handleCardLeave}
            className="relative overflow-hidden rounded-2xl group"
          >
            <img
              className="h-[32vw] rounded-2xl object-cover object-center"
              src={item.img}
              alt={`Tab ${activeTab} item ${index + 1}`}
            />
           
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TabComponent;
