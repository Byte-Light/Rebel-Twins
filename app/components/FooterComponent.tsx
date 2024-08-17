import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm">&copy; 2012-2019 Rebel Twins. All rights reserved.</span>
        <div className="flex mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white ml-4 transition-colors duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white ml-4 transition-colors duration-300">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
