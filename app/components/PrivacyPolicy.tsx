import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center md:justify-between items-center">
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
        >
          Terms of Use
        </a>
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors duration-300 ml-4 md:ml-0"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default PrivacyPolicy;
