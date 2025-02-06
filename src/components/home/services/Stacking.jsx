import React from 'react';
import { Link } from 'react-router-dom';
import Ai_Solutions from '../../../assets/img/Service/Ai-2.png';
import app_dev from '../../../assets/img/Service/app.webp';
import web_dev from '../../../assets/img/Service/web.webp';
import web_design from '../../../assets/img/Service/design.webp';

const Card = ({ title, subtitle, description, points, image, linkText, topOffset }) => {
  return (
    <div className={`card overflow-hidden group sticky rounded-3xl h-[72vh] w-[80vw] bg-blue-500`} style={{ top: topOffset }}>
      <img
        className=" duration-1000 lg:group-hover:scale-[1.2] object-cover object-center filter grayscale group-hover:filter-none"
        src={image}
        alt={title}
      />
      <div className="bg-[#0000007c] md:flex h-full w-full absolute top-0">
        {/* Left Section */}
        <div className="md:w-1/2 bg-cover flex flex-col justify-between bg-center p-10 text-white">
          <div>
            <h2 className="lg:text-[3vw] leading-[3.2vw] text-2xl font-semibold">{title}</h2>
            <p className="lg:text-[1.7vw] text-xl mb-4">{subtitle}</p>
          </div>
          <div>
            <p className="md:text-[12px] text-[12px] lg:text-[1.3vw]">{description}</p>
            <ul className="mt-4 space-y-2 text-[12px] md:text-[14px] lg:text-[1.2vw]">
              {points.map((point, index) => (
                <li key={index}>✱ {point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-cover p-10 text-white flex flex-col items-end justify-end">
          <Link
            to={"/webdev"}
            className="mt-4 inline-block w-fit bg-white text-black py-2 px-4 rounded-md shadow-md hover:bg-red-500 transition"
          >
            {linkText} →
          </Link>
        </div>
      </div>
    </div>
  );
};

function Stacking() {
  // Data for each card
  const cardsData = [
    {
      title: "Web Development",
      subtitle: "Building the Future Online.",
      description: "Custom websites, e-commerce solutions, design, development, optimization, user experience.",
      points: ["Custom Website Development", "E-commerce Solutions", "Performance Optimization", "User Experience Design"],
      image:  web_dev ,
      linkText: "Explore Web Development",
      topOffset: "20vh",
    },
    {
      title: "Web Design",
      subtitle: "Designing Digital Experiences.",
      description: "Creative, responsive web design, user-focused, brand alignment, mobile optimization.",
      points: ["Responsive Web Design", "User-Centered Design", "Brand Alignment", "Mobile Optimization"],
      image:  web_design ,
      linkText: "Explore Web Design",
      topOffset: "22vh",
    },
    {
      title: "App Development",
      subtitle: "Innovative Mobile Solutions.",
      description: "Custom app development, design, integration, testing, and user experience.",
      points: ["Custom App Development", "Cross-Platform Compatibility", "User Experience Design", "App Testing & Deployment"],
      image:  app_dev ,
      linkText: "Explore App Development",
      topOffset: "24vh",
    },
    {
      title: "AI Solutions",
      subtitle: "Transforming Businesses with AI.",
      description: "AI-driven automation, data analysis, machine learning, predictive insights, chatbots.",
      points: ["AI Automation", "Data Analysis & Insights", "Machine Learning Models", "Chatbot Development"],
      image:  Ai_Solutions ,
      linkText: "Explore AI Solutions",
      topOffset: "26vh",
    },
  ];

  return (
    <div className="flex flex-col bg-neutral-900 rounded-b-3xl relative z-10 items-center justify-center py-20">
      <div className="flex sticky top-[5vh] flex-col justify-center items-center gap-3 flex-wrap mb-[4vw]">
        <h2 className="lg:text-[3vw] leading-[3.2vw] text-3xl text-white font-semibold">What We Do</h2>
        <p className="lg:text-[1vw] text-xs text-white lg:mt-[0.5vw] tracking-wide text-center">
          WE PLAN, DESIGN, BUILD AND MARKET HIGH QUALITY PRODUCTS
        </p>
      </div>
      <div className="flex flex-col gap-[13vh]">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        <div className="card overflow-hidden sticky top-[26vh]"></div>
      </div>
    </div>
  );
}

export default Stacking;