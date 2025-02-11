import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ContactForm from "../../../../ContactUs/ContactForm";
import Footer from "../../../Footer";
import img from '../../../../../assets/img/Service/web.webp'
import BlogHeroSec from "../../../../Blogs/BlogHeroSec";
import Preloader from "../../../../Animation/WebDevPreloader";
const WebDev = () => {

  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
 
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis & Planning",
      description:
        "We start by understanding your project goals, technical requirements, and business needs. Through detailed discussions and research, we create a roadmap that defines the project scope, features, and technology stack.",
    },
    {
      number: "02",
      title: "Architecture & Design",
      description:
        "We structure the website by developing wireframes and defining the backend architecture. This step ensures a scalable, secure, and efficient system, focusing on UI/UX principles for a seamless user experience.",
    },
    {
      number: "03",
      title: "Development & Implementation",
      description:
        "Our developers bring the design to life by coding the frontend and backend, integrating databases, and ensuring smooth API functionality. We use modern frameworks and best practices for high-performance development.",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "We rigorously test the website for functionality, performance, security, and cross-device compatibility. Bug fixes, speed optimization, and final refinements ensure a flawless user experience before deployment.",
    },
    {
      number: "05",
      title: "Deployment & Maintenance",
      description:
        "After launch, we ensure smooth deployment and monitor the website for performance. Regular updates, security patches, and continuous improvements keep the website fast, secure, and up to date with evolving needs.",
    },
  ];
  
     const [isLoading, setIsLoading] = useState(true);
    
      const handlePreloaderFinish = () => {
        setIsLoading(false);
      };



  return (
       <div div className="poppins">
         {isLoading && <Preloader onFinish={handlePreloaderFinish} />}
       <BlogHeroSec/>
      <section ref={targetRef} className="relative h-[300vh] bg-white z-10 ">
      <div className="sticky top-0  flex h-screen  foverlow-hidden">
        <motion.div style={{ x }} className="flex gap-4 sticky top-0 ">
        <div
      className="group relative h-[100vh] -left-[1vw] w-[100vw] overflow-hidden"
    >
     <img src={img} className="h-full w-[100vw] object-cover" /> 
    </div>
        </motion.div>
      </div>
      <div className="h-[300vh] ">
      <div className=" h-[100vh]   w-full"></div>
        <div className=" h-[100vh]  pl-[25vw] pr-[15vw] ">
        {steps.map((step, index) => (
        <div key={index} className="border-b py-6">
          <p className="text-lg font-bold">{step.number}</p>
          <h2 className="font-bold text-xl mt-2">{step.title}</h2>
          {step.description && (
            <p className="text-gray-700 mt-2">{step.description}</p>
          )}
        </div>
      ))}
        </div>
        <ContactForm/>
      </div>
    </section>
      <div className="h-[200vh]">
      <Footer/>
      </div>
    </div>
  );
};

export default WebDev;
