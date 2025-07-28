import React from 'react';

const Navbar = () => {
  const navLinks = [
    'About',
    'Experience',
    'Projects',
    'Publications',
    'Contact',
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 px-8 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold tracking-wider text-brand-accent"
        >
          A.
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-brand-accent transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
