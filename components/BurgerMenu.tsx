import React, { useState } from 'react';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
          <a href="#projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;