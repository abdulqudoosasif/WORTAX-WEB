import React from "react";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (

    <div>
      <Home />
    </div>
  )
}

export default App;
