import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ContactForm from "../../../../ContactUs/ContactForm";
import Footer from "../../../Footer";
import img from '../../../../../assets/img/Service/design.webp'
import BlogHeroSec from "../../../../Blogs/BlogHeroSec";
import Preloader from "../../../../Animation/WebDesignPreloader";
const WebDesign = () => {

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
      title: "Discovery",
      description:
        "We dive deep into your business, understanding your goals, target audience, and the digital landscape.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "Our team creates a comprehensive sitemap and wireframes, ensuring that every detail is planned with precision.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Bringing your vision to life, our creative team develops stunning visuals that resonate with your audience.",
    },
    {
      number: "04",
      title: "Development",
      description: "", 
    },
    {
        number: "01",
        title: "Discovery",
        description:
          "We dive deep into your business, understanding your goals, target audience, and the digital landscape.",
      },
      {
        number: "02",
        title: "Planning",
        description:
          "Our team creates a comprehensive sitemap and wireframes, ensuring that every detail is planned with precision.",
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
        <div className=" h-[100vh]  pl-[25vw] ">
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

export default WebDesign;
