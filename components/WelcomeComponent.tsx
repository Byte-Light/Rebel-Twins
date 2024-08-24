"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WelcomeComponent: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-yellow-500 flex items-center justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          HI THERE!
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mt-2"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
        >
          HELLO!
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-800 mt-4"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
        >
          Thank You for playing our games!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeComponent;
