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
      title: "Discovery & Research",
      description:
        "We start by understanding your business, goals, and target audience. Through competitor analysis and market research, we identify opportunities to create a website that stands out in your industry.",
    },
    {
      number: "02",
      title: "Planning & Wireframing",
      description:
        "With insights in place, we map out the website structure, creating wireframes and user flows. This step ensures an intuitive user experience and a solid foundation for development.",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Our creative team brings your vision to life by designing a visually engaging, user-friendly interface. We focus on aesthetics, accessibility, and brand consistency to leave a lasting impact on your audience.",
    },
    {
      number: "04",
      title: "Development & Optimization",
      description:
        "We transform designs into a fully functional, high-performance website using the latest web technologies. Our team ensures responsiveness, speed optimization, and SEO best practices for a seamless user experience.",
    },
    {
      number: "05",
      title: "Launch & Maintenance",
      description:
        "After thorough testing, we deploy your website, ensuring a smooth launch. Post-launch, we offer ongoing maintenance, updates, and improvements to keep your website secure, fast, and aligned with evolving business needs.",
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

export default WebDesign;
