import React from 'react';

const Footers = () => {
  return (
    <footer className="bg-black lg:h-36 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 lg:pt-6 ">
        <div className="lg:text-4xl font-bold mb-4 md:mb-0">
        DEVELOPER
        </div>
        <div className="flex space-x-8 mb-4 md:mb-0">
        <a href="https://www.linkedin.com/in/pakshal-shah-946368244/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/pakshalhere?igsh=ZGRrNWc3cDBjNGx4" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/instagram.png" alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="https://github.com/PakshalS" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/github.png" alt="Github" className="h-8 w-8" />
          </a>
        </div>
        <div className="text-sm">
          &copy; 2022. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footers;
