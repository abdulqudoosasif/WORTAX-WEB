import React from "react";
import { Link } from "react-router-dom";
import TheBlog from "./TheBlog";
import image from "../../assets/img/Blogs/main.webp";
import blog_1 from "../../assets/img/Blogs/blog-1.webp";
import blog_2 from "../../assets/img/Blogs/blog-2.webp";
import blog_3 from "../../assets/img/Blogs/blog-3.webp";
import blog_4 from "../../assets/img/Blogs/blog-4.webp";
import blog_5 from "../../assets/img/Blogs/blog-5.webp";
import blog_6 from "../../assets/img/Blogs/blog-6.webp";
import blog_7 from "../../assets/img/Blogs/blog-7.webp";
import blog_8 from "../../assets/img/Blogs/blog-8.webp";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import RecommendedBlog from "./RecommendedBlog";

function BlogCard() {
  return (
    <div className="p-[5vw] bg-neutral-900 rounded-b-3xl z-10 relative">
      <div className="flex flex-col justify-center items-center gap-3 flex-wrap mb-[4vw]">
        <h2 className="lg:text-[3vw] text-3xl text-white font-semibold">
          THE BLOGS
        </h2>
        <p className="lg:text-[1vw] text-xs lg:mt-[1.2vw] text-white tracking-wide text-center">
          AWESOME ARTICALS FROM THE BLOGS
        </p>
      </div>

      {/* Main Articles */}
      <div className=" w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Articles Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Article 1 */}
          <div className="relative bg-white lg:rounded-[0.5vw] rounded-lg shadow-md overflow-hidden group">
            <div className="w-full h-[60vh] bg-neutral-900  bg-opacity-30 absolute hidden lg:group-hover:flex items-center justify-center duration-500 cursor-pointer">
              {/* <p className="text-white text-xl">Read more</p> */}
            </div>
            <img src={image} alt="" className="w-full lg:h-[60vh] object-cover" />

            <div className="lg:p-[1.3vw] p-4">
              <p className="text-blue-500 text-sm lg:text-[0.8vw] lg:leading-[0.9vw] font-semibold uppercase">
                TECH
              </p>
              <h3 className="text-lg lg:text-[1.3vw] lg:leading-[1.5vw] font-bold text-gray-900 mt-1">
                Wortax IT Solutions – Stepping Into the Tech World
              </h3>
              <p className="text-sm tracking-wide lg:text-[0.8vw] lg:leading-[1vw] text-[#5f656c]">
                Stepping Into the Tech World With Us! Welcome to the Wortax IT
                Solutions! We will explore the realm of technology today. This
                voyage offers unlimited ...
              </p>
              <Link
                to={"https://wortax.io/wortax-step-into-tech-world/"}
                className="mt-3 text-sm lg:text-[0.85vw] font-medium flex items-center hover:underline"
              >
                Read more <MdOutlineKeyboardDoubleArrowRight className="text-[1.2vw]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Staff Picks Section */}
        <div className="bg-white lg:rounded-[0.5vw] rounded-lg shadow-md hidden  p-[1.3vw] lg:flex flex-col">
          <h2 className="text-[1.4vw] leading-[1.5vw] font-semibold">Recomendations</h2>
          <h2 className="text-[1.4vw] leading-[1.5vw] text-[#99a0a9] font-semibold mb-6">by Wortax IT Solutions</h2>
          <RecommendedBlog
            title="Wortax IT Solutions – Stepping Into the Tech World"
            description="Stepping Into the Tech World With Us! Welcome to the Wortax IT
                Solutions! We will explore the realm of technology today. This
                voyage offers unlimited"
            BlogLink="https://wortax.io/wortax-step-into-tech-world/"
          />
          <RecommendedBlog
            title="Google Algorithm Updates & Changes"
            description="As the gatekeeper to online visibility in the always changing
               world of digital marketing, Google is essential to search engine
               optimization (SEO). Knowing how Google"
            BlogLink="https://wortax.io/google-algorithm-updates-changes/"
          />
          <RecommendedBlog
            title="Why Technology Is Important?"
            description="Technology plays a pivotal role in shaping the modern world. From
                the way we communicate to how we work, learn, and entertain
                ourselves, technological advancements"
            BlogLink="https://wortax.io/technology-is-important//"
          />
        </div>
      </div>

      {/* Blogs */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center mt-6">
        <TheBlog
          Image={blog_1}
          catagory="SEO"
          title="How to Choose the Best SEO Company"
          description="In the current digital era, SEO (Search Engine Optimization) is an
              essential component of any company’s online success. SEO firms are
              not all-inclusive. You can"
          BlogLink="https://wortax.io/choose-the-best-seo-company-in-9-steps/"
        />
        <TheBlog
          Image={blog_2}
          catagory="Digital Marketing"
          title="Google Algorithm Updates & Changes"
          description="As the gatekeeper to online visibility in the always changing
              world of digital marketing, Google is essential to search engine
              optimization (SEO). Knowing how Google"
          BlogLink="https://wortax.io/google-algorithm-updates-changes/"
        />
        <TheBlog
          Image={blog_3}
          catagory="Digital Marketing"
          title="5 Ways to Acquire Customer Review"
          description="What is Customer Review? In today’s digital world client reviews
              have become a pivotal element of business success. A customer
              review is feedback provided"
          BlogLink="https://wortax.io/5-ways-to-acquire-customer-review/"
        />
        <TheBlog
          Image={blog_4}
          catagory="Social Media"
          title="Build Customer Relationships on Social Media"
          description="In today’s digital age, many consumers rely on online shopping for
              their daily needs, making it challenging for businesses to
              establish personal"
          BlogLink="https://wortax.io/5-ways-to-build-customer-relationships-on-social-media/"
        />
        <TheBlog
          Image={blog_5}
          catagory="Social Media"
          title="Social Media Ads 101: A Quick Start"
          description="Social media has evolved from a tool for personal interaction into
              one of the most powerful marketing platforms for businesses
              worldwide. With billions of users"
          BlogLink="https://wortax.io/social-media-ads-101-a-quick-start/"
        />
        <TheBlog
          Image={blog_6}
          catagory="Email Marketing"
          title="Email Marketing with Scalable Personalization"
          description="“You’ve got mail”. Remember the iconic AOL notification from the
              90s? While it might be a nostalgic memory for some, email
              marketing has evolved dramatically"
          BlogLink="https://wortax.io/automate-email-marketing/"
        />
        <TheBlog
          Image={blog_7}
          catagory="SEO"
          title="3 Silly SEO Myths You Should Ignore"
          description="Read these 3 Silly SEO Myths Search Engine Optimization (SEO) is
              often misunderstood, primarily due to the vast amount of
              conflicting advice and myths that"
          BlogLink="https://wortax.io/3-silly-seo-myths-you-should-ignore/"
        />
        <TheBlog
          Image={blog_8}
          catagory="Tech"
          title="Why Technology Is Important?"
          description="Technology plays a pivotal role in shaping the modern world. From
              the way we communicate to how we work, learn, and entertain
              ourselves, technological advancements"
          BlogLink="https://wortax.io/technology-is-important//"
        />
      </div>
    </div>
  );
}

export default BlogCard;
