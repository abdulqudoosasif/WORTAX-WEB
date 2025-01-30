import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Img1 from '../../../assets/img/Review/1.png';
import Img2 from '../../../assets/img/Review/2.png';
import Img3 from '../../../assets/img/Review/3.png';
import Img4 from '../../../assets/img/Review/4.png';
import Img5 from '../../../assets/img/Review/5.png';
import Img6 from '../../../assets/img/Review/6.png';
import Img7 from '../../../assets/img/Review/7.png';
import Img8 from '../../../assets/img/Review/8.png';
import Img9 from '../../../assets/img/Review/15.png';
import Img10 from '../../../assets/img/Review/10.png';
import Img11 from '../../../assets/img/Review/11.png';
import Img12 from '../../../assets/img/Review/12.png';
import Img13 from '../../../assets/img/Review/13.png';
import Img14 from '../../../assets/img/Review/14.png';

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14];

const MobileSec = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the third image as active
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, images.length - 1]);

  useEffect(() => {
    const unsubscribe = yRange.onChange((v) => {
      const newIndex = Math.round(v);
      // Ensure the active index is always the third visible image
      setActiveIndex(Math.min(Math.max(newIndex, 2), images.length - 3));
    });

    return () => unsubscribe();
  }, [yRange]);

  return (
    <div
      className="lg:hidden relative z-10  md:hidden flex flex-col h-[70vh] overflow-y-scroll no-scrollbar snap-y snap-mandatory"
      ref={containerRef}
    >
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="w-full h-[20vh] flex items-center justify-center snap-center"
          style={{
            scale: activeIndex === index ? 0.95 : 0.75,
            opacity: activeIndex === index ? 1 : 0.8,
            transition: 'scale 0.3s, opacity 0.3s',
          }}
        >
          <img
            src={img}
            alt=""
            className="w-fit h-fit object-cover object-center rounded-lg shadow-lg border"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MobileSec;