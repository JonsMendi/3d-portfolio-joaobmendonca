import emailjs from '@emailjs/browser';
import Image from "next/image";
import { useState } from 'react';
import { joao } from "../assets/index-assets";
import { styles } from '../style';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'João Borges Mendonça',
      from_name: name,
      message: message,
    };

    emailjs.send('joao_borges_mendonca_23', 'template_svfcq3v', templateParams, 'd21ayNZqYS2otgINP')
      .then((result) => {
        console.log(result.text);
        alert('Your message was sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('There was an error sending your message. Please try again later.');
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
    id="contacts"
    className={`${styles.padding}  mx-auto relative z-0 bg-[#292d33]`}>
      <div className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden `}>
        <div className=" flex-[0.5] p-8 rounded-">

          <p className={styles.sectionSubText}>Let&apos;s talk about it</p>
          <h3 className={styles.sectionHeadText}>Say Hi.</h3>

            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">

              <label className="flex flex-col">
                <span className="text-white text-xl mb-4">What&apos;s your name?</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alexander the Great"
                  className="bg-primary py-4 px-6 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-none font-bold"
                />
              </label>
    
              <label className="flex flex-col">
                <span className="text-white text-xl mb-4">What&apos;s your email?</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alexander.the.great@mail.com"
                  className="bg-primary py-4 px-6 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-none font-bold"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white text-xl mb-4">What&apos;s your message?</span>
                <textarea
                  rows={7}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What you want to say?"
                  className="bg-primary py-4 px-6 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-none font-bold"
                />
              </label>

              <button
                type="submit"
                className="bg-[#292d33] hover:bg-tertiary border-2 border-tertiary hover:border-primary py-3 px-8 rounded-xl text-white hover:text-primary font-bold text-xl ease-in-out duration-200"
              >
                Send
              </button>
              
            </form>
          </div>

          <div className="flex flex-[0.5] flex-col md:flex-col items-center justify-center md:space-x-8 SECTION2 ">
            <div className="flex flex-col md:flex-col items-center justify-center md:space-x-8">

              <Image 
                alt='joao_image'
                className='h-full object-cover w-60 rounded-full mb-4 mt-10 md:mb-0 opacity-70' src={joao}/>
              <div className=" flex flex-col text-center mt-10 md:text-left">
                <h2 className="text-xl font-bold mb-2">Name</h2>
                <p className="text-tertiary mb-2">João Borges Mendonça</p>
                <h2 className="text-xl font-bold mb-2">Location</h2>
                <p className="text-tertiary mb-2">Berlin (Willing to Relocate)</p>
                <h2 className="text-xl font-bold mb-2">Phone</h2>
                <p className="text-tertiary mb-2">+491744010727</p>
                <h2 className="text-xl font-bold mb-2">Social Media</h2>
                <div className="flex flex-col ">
                  <a href="https://www.linkedin.com/myprofile/" target="_blank" rel="noopener noreferrer">
                    <p className="text-tertiary hover:text-gray-400 cursor-pointer w-6 h-6">LinkedIn</p>
                  </a>
                  <a href="https://github.com/myusername" target="_blank" rel="noopener noreferrer">
                    <p className="text-tertiary hover:text-gray-400 cursor-pointer w-6 h-6">Guithub</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
      </div>
    </div>
  );
};

export default Contact;
