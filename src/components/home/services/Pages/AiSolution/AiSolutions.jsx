import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ContactForm from "../../../../ContactUs/ContactForm";
import Footer from "../../../Footer";
import img from '../../../../../assets/img/Service/Ai-2.png'
import BlogHeroSec from "../../../../Blogs/BlogHeroSec";
import Preloader from "../../../../Animation/AiPreloader";
const AiSolutions = () => {

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
      title: "Data Collection & Analysis",
      description:
        "We gather relevant data for your business, including market trends, customer behavior, and industry insights. This data is fundamental for training the AI model.",
    },
    {
      number: "02",
      title: "Model Selection & Strategy",
      description:
        "We understand your business requirements and select the best AI models and algorithms. At this stage, we use advanced techniques such as deep learning, machine learning, and NLP (Natural Language Processing).",
    },
    {
      number: "03",
      title: "Model Training & Optimization",
      description:
        "The AI model is trained using the collected data, enabling it to learn patterns and insights effectively. We also use hyperparameter tuning and continuous testing to improve accuracy and efficiency.",
    },
    {
      number: "04",
      title: "Deployment & System Integration",
      description:
        "Once the AI model is fully optimized, we integrate it into your existing business software or platforms. This ensures that AI works seamlessly and helps automate your business operations.",
    },
    {
      number: "05",
      title: "Monitoring, Maintenance & Improvement",
      description:
        "After deploying the AI solution, its performance is continuously monitored. We provide regular updates and improvements so the AI model can adapt to new challenges and data, delivering better results.",
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

export default AiSolutions;
