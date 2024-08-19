"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative h-screen overflow-hidden flex items-center bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
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
      <motion.div
        className="container relative z-20 mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          hidden: { opacity: 0 },
        }}
      >
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-4">DRAGON HILLS 2</h1>
          <p className="text-lg lg:text-2xl mb-6">Hop on your machine dragon and fight to save humanity!</p>
          <Link href="/dragon-hills-2">
            <motion.button
              className="inline-block bg-transparent border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              VIEW MORE
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Section (Image Section) */}
        <motion.div
          className="lg:w-1/2 relative hidden lg:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
