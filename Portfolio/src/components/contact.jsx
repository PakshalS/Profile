import React from 'react';
import image from '../assets/contact-img.png'; 
import file from '../assets/PAKSHALSHAH_SYIT-DJSCE26.pdf';

const ContactForm = () => {
  const onButtonClick = () => {
    const pdfUrl = {file};
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "PAKSHALSHAH_SYIT-DJSCE26.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className="bg-gradient-to-r from-black via-pink-600 to-black py-16" id='contact'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:space-x-8 px-4">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={image} alt="Contact Illustration" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get In Touch</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
              rows="4"
            ></textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" >
            <button
                onClick={onButtonClick}
              className="w-full py-4 bg-purple-600 text-white rounded-lg hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Download CV
            </button>
            <button
              type="submit"
             
              className="w-full py-4 bg-purple-600 text-white rounded-lg hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Send
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
