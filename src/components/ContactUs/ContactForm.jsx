import React from "react";

const  ContactForm = () => {
  return (
    <div className="flex relative z-30 bg-gray-50 lg:py-[5vw] flex-col md:flex-row mt-[8vw] border-t-[1px] items-start  justify-between p-8 md:p-16">
      {/* Left Section */}
      <div className="md:w-1/2 lg:sticky lg:top-[7vw] space-y-4">
        <p className="uppercase text-[2vw]font-medium tracking-wide">Contact</p>
        <h1 className="text-[3vw] font-semibold leading-tight">
          Hi there! What brings <span className="italic">you</span> here today?
        </h1>
        <p className="text-gray-600">
          For careers and open positions see our{" "}
          <a
            href="/careers"
            className=" underline"
          >
            careers page
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="space-y-4">
          <h2 className="text-[4vw] font-light">Hire Amp</h2>
          <p className="text-neutral-900 font-light text-[2vw]">A few questions to get started</p>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex mt-[2vw] gap-4">
              <div className="flex-1">
                <label className="block  text-[1.6vw] font-light" htmlFor="firstName">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-[1.6vw] font-light" htmlFor="lastName">
                  &nbsp;
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[1.6vw] font-light" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Work Email"
                className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Company Field */}
            <div>
              <label className="block text-[1.6vw] font-light" htmlFor="company">
                Company*
              </label>
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Title Field */}
            <div>
              <label className="block text-[1.6vw] font-light" htmlFor="title">
                Title*
              </label>
              <input
                type="text"
                id="title"
                placeholder="Your Title"
                className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[1.6vw] font-light" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Work Email"
                className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Company Field */}
            <div>
              <label className="block text-[1.6vw] font-light" htmlFor="company">
                Company*
              </label>
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Title Field */}
            <div>
              <label className="block text-[1.6vw] font-light" htmlFor="title">
                Title*
              </label>
              <input
                type="text"
                id="title"
                placeholder="Your Title"
                className="mt-1 w-full border-b-2 bg-gray-50 border-gray-300 text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
