import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';
import Example from './components/Services'
function App() {
  const locomotiveScroll = new LocomotiveScroll()
  return (
    <div>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Example/>
    </div>
  )
}

export default App
