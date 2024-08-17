import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24 px-4 lg:px-8 space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">DRAGON HILLS 2</h1>
          <p className="text-lg lg:text-xl mb-6">Hop on your machine dragon and fight to save humanity!</p>
          <Link href="/dragon-hills-2">
            <button className="inline-block bg-transparent border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              VIEW MORE
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <Image
            src="/images/dragon_hills.png"  // Path to your image
            alt="Dragon Hills 2"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
