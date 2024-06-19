import React from 'react';

const Footers = () => {
  return (
    <footer className="h-48 bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-8 pt-10">
        <div className="text-4xl font-bold">
          DEVELOPER
        </div>
        <div className="flex space-x-8">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/instagram.png" alt="Facebook" className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/github.png" alt="Instagram" className="h-8 w-8" />
          </a>
        </div>
        <div className="text-sm">
          &copy; 2024. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footers;
