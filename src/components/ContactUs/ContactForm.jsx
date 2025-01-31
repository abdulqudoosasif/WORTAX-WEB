import React, { useState } from "react";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phoneNumber: "",
    projectType: "",
    projectDescription: "",
    timeline: "",
    budgetRange: "",
    hearAboutUs: "",
    communicationMethod: "",
    additionalNotes: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  // Calculate progress percentage
  const progressPercentage = ((step - 1) / 3) * 100; // 4 steps = 0%, 33%, 66%, 100%

  return (
    <div className="flex relative z-30 lg:min-h-[75vh] rounded-b-3xl text-white bg-neutral-900 lg:py-[5vw] flex-col md:flex-row border-t-[1px] items-start justify-between p-8 md:p-16">
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

      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="space-y-4">
          <h2 className="lg:text-[4vw] text-4xl font-light">Hire Amp</h2>
          <p className="text-neutral-100 font-light lg:text-[2vw]">
            A few questions to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="firstName">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="lastName">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="email">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
              </>
            )}

            {/* Step 2: Company Information */}
            {step === 2 && (
              <>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="company">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="jobTitle">
                    Job Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="phoneNumber">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                  />
                </div>
              </>
            )}

            {/* Step 3: Project Information */}
            {step === 3 && (
              <>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="projectType">
                    Project Type<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="webDevelopment">Web Development</option>
                    <option value="design">Design</option>
                    <option value="ai">AI</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="projectDescription">
                    Project Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    placeholder="Describe your project in detail"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    rows="1"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="timeline">
                    Timeline<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    placeholder="E.g., 2 weeks, 1 month"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="budgetRange">
                    Budget Range<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="budgetRange"
                    placeholder="E.g., $5,000 - $10,000"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
              </>
            )}

            {/* Step 4: Additional Information */}
            {step === 4 && (
              <>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="hearAboutUs">
                    How Did You Hear About Us?<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="hearAboutUs"
                    placeholder="E.g., Google, Referral, Social Media"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="communicationMethod">
                    Preferred Communication Method<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="communicationMethod"
                    value={formData.communicationMethod}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    required
                  >
                    <option value="">Select Communication Method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="additionalNotes">
                    Additional Notes or Requirements
                  </label>
                  <textarea
                    id="additionalNotes"
                    placeholder="Add any specific details or requirements here (Optional)"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                    rows="1"
                  ></textarea>
                </div>
              </>
            )}

            {/* Progress Bar */}
            <div style={{marginTop:"3vw",}} className="w-8/12 mx-auto bg-gray-100 rounded-full h-1.5 ">
              <div
                className="bg-red-500 h-1.5 duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-50 text-neutral-900">
                  Back
                </button>
              )}
              {step < 4 && (
                <button type="button" onClick={nextStep} className="px-6 py-2 bg-gray-50 text-neutral-900">
                  Next
                </button>
              )}
              {step === 4 && (
                <button type="submit" className="px-6 py-2 bg-gray-50 text-neutral-900">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;