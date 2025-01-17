import React, { useState } from 'react'
import ContactForm from '../components/ContactUs/ContactForm'
import ContactHero from '../components/ContactUs/ContactHero'
import ContactPreloader from '../components/Animation/ContactPreloader';

function Contact() {

      const [isLoading, setIsLoading] = useState(true);
      
        const handlePreloaderFinish = () => {
          setIsLoading(false);
        };
  return (
<>
{isLoading && <ContactPreloader onFinish={handlePreloaderFinish} />}
    <div className='poppins'>
      <ContactHero/>
      <ContactForm/>
    </div>
</>
  )
}

export default Contact
