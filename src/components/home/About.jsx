import React from 'react'

function About() {
  const advantages = [
    {
      icon: "➡️",
      title: "Speed and Precision",
      description:
        "We prioritize quick, quality hires. Our data-driven process blends technology with a human touch, reducing hiring time without compromising excellence.",
    },
    {
      icon: "🧭",
      title: "Talent Scouting Expertise",
      description:
        "Our recruiters are talent scouts who uncover high-potential candidates, even those not actively searching, ensuring access to untapped talent pools.",
    },
    {
      icon: "🚀",
      title: "Talent That Transforms",
      description:
        "We find candidates who not only fit the role but also drive growth and innovation within your organization.",
    },
    {
      icon: "🎛️",
      title: "Personalized Partnership",
      description:
        "We tailor recruitment strategies to your unique needs, immersing ourselves in your company culture to deliver customized talent solutions.",
    },
    {
      icon: "⭐",
      title: "Industry Expertise",
      description:
        "Our deep industry knowledge allows us to identify top-tier talent that’s ready to excel in your specific sector.",
    },
    {
      icon: "🧩",
      title: "Focus on Culture Fit",
      description:
        "We prioritize cultural fit, conducting thorough assessments to ensure your new hires will thrive and contribute to a cohesive workplace.",
    },
  ];
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.3' 
    className='bg-gray-50 rounded-t-3xl  h-[100vh] -mt-[15vw] overflow-hidden relative z-20'>
     <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[3vw] text-neutral-900 font-extrabold text-center mb-12">
          ABOUT US
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-lg rounded-lg p-6"
            >
              <div className="text-4xl mb-4">{adv.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
              <p className="text-gray-600">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default About
