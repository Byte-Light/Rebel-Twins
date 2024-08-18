"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StatsComponentProps {
  downloads: number;
  games: number;
  cupsOfCoffee: number;
}

const StatsComponent: React.FC<StatsComponentProps> = ({ downloads, games, cupsOfCoffee }) => {
  const [downloadCount, setDownloadCount] = useState(0);
  const [gameCount, setGameCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);

  const countUp = (
    start: number,
    end: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    duration: number
  ) => {
    const totalSteps = end - start;
    const stepTime = (duration * 1000) / totalSteps; // Time per step in milliseconds

    if (totalSteps > 0) {
      const increment = () => {
        setCount((prev) => {
          if (prev < end) {
            return prev + 1;
          }
          return end;
        });
      };

      const interval = setInterval(() => {
        increment();
      }, stepTime);

      setTimeout(() => clearInterval(interval), duration * 1000);
    }
  };

  useEffect(() => {
    countUp(0, downloads, setDownloadCount, 4); // 4 seconds duration
    countUp(0, games, setGameCount, 4); // 4 seconds duration
    countUp(0, cupsOfCoffee, setCoffeeCount, 4); // 4 seconds duration
  }, [downloads, games, cupsOfCoffee]);

  return (
    <div className="bg-yellow-400 text-center py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white font-bold text-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <p>{downloadCount.toLocaleString()}</p>
            <p className="text-lg mt-2">DOWNLOADS</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <p>{gameCount}</p>
            <p className="text-lg mt-2">GAMES</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <p>{coffeeCount.toLocaleString()}</p>
            <p className="text-lg mt-2">CUPS OF COFFEE</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          WE’RE HERE FOR YOU!
        </motion.div>
        <motion.div
          className="text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
        >
          GENERATING NEW IDEAS.
        </motion.div>
        <motion.p
          className="text-lg mt-4 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9, duration: 0.8 }}
        >
          We are focused on creating and publishing high quality and incredibly addictive games for iOS and Android.
        </motion.p>
      </div>
    </div>
  );
};

export default StatsComponent;
