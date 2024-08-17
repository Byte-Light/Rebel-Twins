import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-2">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png" 
              alt="Rebel Twins Logo"
              className="h-12 w-auto"
            />
          </Link>
          <span className="ml-3 text-lg font-bold text-gray-900">REBEL TWINS</span>
          <span className="ml-2 text-sm font-medium text-gray-500">INDIE GAMES</span>
        </div>

        {/* Nav Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/games" className="text-gray-700 hover:text-yellow-600">Our Games</Link>
          <Link href="/company" className="text-gray-700 hover:text-yellow-600">Company</Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-600">Contact</Link>
          <Link href="/press-kits" className="text-gray-700 hover:text-yellow-600">Press Kits</Link>
        </nav>

        {/* Search Icon */}
        <div className="flex items-center">
          <button className="text-gray-500 hover:text-yellow-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4a8 8 0 104 0a8 8 0 000 16zM21 21l-5.4-5.4" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-500 hover:text-yellow-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className="md:hidden bg-white border-t-2">
        <div className="container mx-auto flex flex-col items-start p-4 space-y-4">
          <Link href="/games" className="text-gray-700 hover:text-yellow-600">Our Games</Link>
          <Link href="/company" className="text-gray-700 hover:text-yellow-600">Company</Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-600">Contact</Link>
          <Link href="/press-kits" className="text-gray-700 hover:text-yellow-600">Press Kits</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
