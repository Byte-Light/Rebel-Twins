import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden flex items-center bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dragon-header.webp" // Path to your image
          alt="Dragon Hills 2"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content Section */}
      <div className="container relative z-20 mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4 lg:px-8">
        {/* Text Section */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-4">DRAGON HILLS 2</h1>
          <p className="text-lg lg:text-2xl mb-6">Hop on your machine dragon and fight to save humanity!</p>
          <Link href="/dragon-hills-2">
            <button className="inline-block bg-transparent border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              VIEW MORE
            </button>
          </Link>
        </div>

        {/* Right Section (Empty space for image) */}
        <div className="lg:w-1/2 relative hidden lg:block">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/dragon-header.webp" // Path to your image
              alt="Dragon Hills 2"
              layout="fill"
              objectFit="contain"
              priority
              className="object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
