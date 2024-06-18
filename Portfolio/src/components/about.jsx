import React from 'react';
import header from '../assets/header-img.png'; 
import { Link } from 'react-scroll';

const Abouts = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen bg-about-back ">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-600 to-purple-800 inline-block px-4 py-2 border-white border-2 mb-4">
              Welcome to my Portfolio
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Hi! I'm Pakshal Shah</h1>
            <h1 className="text-4xl pt-6 md:text-5xl lg:text-6xl font-bold leading-tight">Web Developer</h1>
            <p className="mt-4 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum obcaecati accusantium dolorem similique eaque sunt dolores suscipit minus illum libero, perspiciatis quis qui non, sint, provident beatae debitis saepe.</p>
            <p className="mt-4 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum obcaecati accusantium dolorem similique eaque sunt dolores suscipit minus illum libero, perspiciatis quis qui non, sint, provident beatae debitis saepe.</p>
            <Link to="contact" smooth={true} duration={500}>
              <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                <span>Let's Connect</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:ml-6 lg:ml-12">
            <img src={header} alt="Astronaut" className="w-64 md:w-72 lg:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
