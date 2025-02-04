import React, { useState } from 'react'
import BlogHeroSec from '../components/Blogs/BlogHeroSec'
import Preloader from "../components/Animation/BlogPreloader";
import Footer from "../components/home/Footer";
import BlogCard from '../components/Blogs/BlogCard';
const Blog = () => {
   const [isLoading, setIsLoading] = useState(true);
  
    const handlePreloaderFinish = () => {
      setIsLoading(false);
    };
  return (
    <>
    {isLoading && <Preloader onFinish={handlePreloaderFinish} />}
    <div className='poppins'>
      <BlogHeroSec/>
      <BlogCard/>
      <Footer/>
    </div>
    </>
  )
}

export default Blog
