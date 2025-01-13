import React from 'react'
import WorkMain from "../components/work/WorkMain";
import TabComponent from "../components/work/Tabs/TabComponent";
import Footer from '../components/home/Footer';
function Work() {
  return (
    <div className='bg-[#F5F5F5]'>
      <WorkMain/>
    <TabComponent/>
    <Footer/>
    </div>
  )
}

export default Work
