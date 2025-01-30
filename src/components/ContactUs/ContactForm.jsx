import React, { useState } from "react";

const ContactForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex relative z-30 rounded-b-3xl text-white bg-neutral-900 lg:py-[5vw] flex-col md:flex-row border-t-[1px] items-start justify-between p-8 md:p-16">
      <div className="md:w-1/2 lg:sticky lg:top-[7vw] space-y-4">
        <p className="uppercase text-[2vw] font-medium tracking-wide">Contact</p>
        <h1 className="lg:text-[3vw] font-semibold leading-tight">
          Hi there! What brings <span className="italic">you</span> here today?
        </h1>
        <p className="text-gray-600">
          For careers and open positions see our {" "}
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

          <form className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="firstName">First Name<span className="text-red-500">*</span></label>
                  <input type="text" id="firstName" placeholder="First Name" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" required />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="lastName">Last Name<span className="text-red-500">*</span></label>
                  <input type="text" id="lastName" placeholder="Last Name" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" required />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="email">Email<span className="text-red-500">*</span></label>
                  <input type="email" id="email" placeholder="Work Email" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" required />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="company">Company Name<span className="text-red-500">*</span></label>
                  <input type="text" id="company" placeholder="Company Name" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" required />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="jobTitle">Job Title<span className="text-red-500">*</span></label>
                  <input type="text" id="jobTitle" placeholder="Job Title" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" required />
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="phoneNumber">Phone Number (Optional)</label>
                  <input type="text" id="phoneNumber" placeholder="Phone Number" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" />
                </div>
              </>
            )}
            {step === 2 && (
              <>
              
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="projectType">Project Type<span className="text-red-500">*</span></label>
                  <select id="projectType" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" required>
                    <option value="">Select Project Type</option>
                    <option value="webDevelopment">Web Development</option>
                    <option value="design">Design</option>
                    <option value="ai">AI</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block lg:text-[1.6vw] font-light" htmlFor="projectDescription">Project Description<span className="text-red-500">*</span></label>
                  <textarea id="projectDescription" placeholder="Describe your project in detail" className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none" rows="1" required></textarea>
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
                placeholder="E.g., 2 weeks, 1 month"
                className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
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
                className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
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
                className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
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
                className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
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
                className="mt-1 w-[85vw] md:w-full border-b-2 bg-neutral-900 border-gray-300 lg:text-[1.2vw] focus:border-black outline-none"
                rows="1"
              ></textarea>
            </div>
              </>
            )}

            <div className="flex justify-between mt-4">
              {step > 1 && <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-50 text-neutral-900">Back</button>}
              {step < 2 && <button type="button" onClick={nextStep} className="px-6 py-2 bg-gray-50 text-neutral-900">Next</button>}
              {step === 2 && <button type="submit" className="px-6 py-2 bg-gray-50 text-neutral-900">Submit</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
