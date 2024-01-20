import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

// Assuming you have a LanguageSwitcher component
const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div></div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;