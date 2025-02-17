import React, { useState } from "react";
import WorkMain from "../components/work/WorkMain";
import TabComponent from "../components/work/Tabs/TabComponent";
import Footer from "../components/home/Footer";
import Preloader from "../components/Animation/WorkPreloader";
import MovingEyes from "../components/work/MovingEyes";

function Work() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onFinish={handlePreloaderFinish} />}

      <div className=" poppins">
        <WorkMain />
        <MovingEyes />
        <TabComponent />
        <Footer />
      </div>
    </>
  );
}

export default Work;
