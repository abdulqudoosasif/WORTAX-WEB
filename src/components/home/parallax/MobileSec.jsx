import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Img1 from '../../../assets/img/Review/1.png';
import Img2 from '../../../assets/img/Review/2.png';
import { twMerge } from "tailwind-merge";

export const MobileSec = () => {
  return (
    <section className="flex md:hidden h-72 flex-col items-center justify-center gap-12 bg-white px-4 py-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-transparent text-neutral-900">
            <img src={Img1} alt="" className=" rounded-t-lg border mt-4" />
            <img src={Img2} alt="" className=" border rounded-b-lg w-full mt-4" />
          </LogoItem>,
          <LogoItem key={2} className="bg-transparent text-neutral-900">
            <img src={Img1} alt="" className=" border rounded-t-lg mt-4" />
            <img src={Img2} alt="" className=" border rounded-b-lg w-full mt-4" />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((pv) => pv + 1);
      }, DELAY_IN_MS);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const toggleAnimation = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div
      onClick={toggleAnimation} 
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
        cursor: "pointer", 
      }}
      className="relative z-0 h-44 w-full shrink-0 rounded-xl  "
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-[250px] w-[100vw] place-content-center rounded-lg bg-neutral-200 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
