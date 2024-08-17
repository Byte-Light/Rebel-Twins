import React from 'react';

const WelcomeComponent: React.FC = () => {
  return (
    <div className="bg-yellow-500 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">HI THERE!</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">HELLO!</h2>
        <p className="text-lg md:text-xl text-gray-800 mt-4">
          Thank You for playing our games!
        </p>
      </div>
    </div>
  );
};

export default WelcomeComponent;
