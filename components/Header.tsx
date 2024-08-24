"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-white border-b-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <motion.div
          className="flex items-center"
          animate={{
            scale: scrollY > 50 ? 0.8 : 1,
            opacity: scrollY > 50 ? 0.7 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Link href="/">
            <img
              src="/images/rebel_logo_bg.webp"
              alt="Rebel Twins Logo"
              className="h-16 w-auto"
            />
          </Link>
        </motion.div>

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
            <FaSearch style={{ fontSize: '24px' }} />
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
