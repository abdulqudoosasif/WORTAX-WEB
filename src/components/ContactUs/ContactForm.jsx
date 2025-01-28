import React from "react";

const ContactForm = () => {
  return (
    <div className="flex relative z-30 rounded-b-3xl text-white bg-neutral-900 lg:py-[5vw] flex-col md:flex-row border-t-[1px] items-start justify-between p-8 md:p-16">
      {/* Left Section */}
      <div className="md:w-1/2 lg:sticky lg:top-[7vw] space-y-4">
        <p className="uppercase text-[2vw] font-medium tracking-wide">Contact</p>
        <h1 className="lg:text-[3vw] font-semibold leading-tight">
          Hi there! What brings <span className="italic">you</span> here today?
        </h1>
        <p className="text-gray-600">
          For careers and open positions see our{" "}
          <a href="/careers" className="underline">
            careers page
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="space-y-4">
          <h2 className="lg:text-[4vw] text-4xl font-light">Hire Amp</h2>
          <p className="text-neutral-100 font-light lg:text-[2vw]">
            A few questions to get started
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="lg:flex mt-[2vw] gap-4">
              <div className="flex-1">
                <label
                  className="block lg:text-[1.6vw] font-light"
                  htmlFor="firstName"
                >
                  First Name<span className="text-red-500">*</span>                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  className="block lg:text-[1.6vw] font-light"
                  htmlFor="lastName"
                >
                  Last Name<span className="text-red-500">*</span>                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="email"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Work Email"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Company Field */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="company"
              >
                Company Name<span className="text-red-500">*</span>              </label>
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Job Title */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="jobTitle"
              >
                Job Title<span className="text-red-500">*</span>              </label>
              <input
                type="text"
                id="jobTitle"
                placeholder=" Job Title (or Role/Position)"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="phoneNumber"
              >
                Phone Number (Optional)
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="projectType"
              >
                Project Type<span className="text-red-500">*</span>              </label>
              <select
                id="projectType"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              >
                <option value="">Select Project Type</option>
                <option value="webDevelopment">Web Development</option>
                <option value="design">Design</option>
                <option value="ai">AI</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="projectDescription"
              >
                Project Description<span className="text-red-500">*</span>              </label>
              <textarea
                id="projectDescription"
                placeholder="Describe your project in detail"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                rows="1"
                required
              ></textarea>
            </div>

            {/* Timeline */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="timeline"
              >
                Timeline<span className="text-red-500">*</span>              </label>
              <input
                type="text"
                id="timeline"
                placeholder="(When do you need the project completed?) E.g., 2 weeks, 1 month"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Budget Range */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="budgetRange"
              >
                Budget Range<span className="text-red-500">*</span>              </label>
              <input
                type="text"
                id="budgetRange"
                placeholder="E.g., $5,000 - $10,000"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* How Did You Hear About Us? */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="hearAboutUs"
              >
                How Did You Hear About Us?<span className="text-red-500">*</span>              </label>
              <input
                type="text"
                id="hearAboutUs"
                placeholder="E.g., Google, Referral, Social Media"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              />
            </div>

            {/* Preferred Communication Method */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="communicationMethod"
              >
                Preferred Communication Method<span className="text-red-500">*</span>              </label>
              <select
                id="communicationMethod"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                required
              >
                <option value="">Select Communication Method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label
                className="block lg:text-[1.6vw] font-light"
                htmlFor="additionalNotes"
              >
                Additional Notes or Requirements
              </label>
              <textarea
                id="additionalNote "
                placeholder="Add any specific details or requirements here  (Optional)"
                className="mt-1 w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                rows="1"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="uppercase lg:px-[2vw] rounded-sm lg:py-[1vw] bg-gray-50 text-neutral-900 font-semibold lg:text-[1.2vw] text-[14px] px-6 py-2" >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
