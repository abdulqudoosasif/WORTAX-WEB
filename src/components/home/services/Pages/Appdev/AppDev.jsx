import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ContactForm from "../../../../ContactUs/ContactForm";
import Footer from "../../../Footer";
import img from '../../../../../assets/img/Service/app.webp'
import BlogHeroSec from "../../../../Blogs/BlogHeroSec";
import Preloader from "../../../../Animation/AppDevPreloader";
const AppDev = () => {

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
        "We analyze your app idea, target audience, and business goals to create a strategic roadmap for development.",
    },
    {
      number: "02",
      title: "Planning & Wireframing",
      description:
        "Our team drafts wireframes and user flows to ensure a seamless user experience and efficient app functionality.",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "We craft visually appealing and user-friendly designs that enhance engagement and usability.",
    },
    {
      number: "04",
      title: "App Development",
      description:
        "Our developers build the app using the latest technologies, ensuring high performance, security, and scalability.",
    },
    {
      number: "05",
      title: "Testing & Quality Assurance",
      description:
        "We rigorously test the app for bugs, performance issues, and usability to deliver a flawless experience.",
    },
    {
      number: "06",
      title: "Deployment & Launch",
      description:
        "Once the app is fully optimized, we deploy it to the App Store and Play Store, ensuring a smooth launch.",
    }
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

export default AppDev;
