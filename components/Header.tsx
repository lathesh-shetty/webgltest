import React from 'react';
import BurgerMenu from './BurgerMenu';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;