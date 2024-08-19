"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface Game {
  title: string;
  description: string;
  image: string;
}

const games: Game[] = [
  {
    title: 'Castle Master TD',
    description: 'Build & defend your castle in this gripping tower defense game.',
    image: '/images/castle_masters.webp',
  },
  {
    title: 'Cookies Must Die',
    description: 'Stop a group of evil, mutant cookies before they reduce whole city to rubble!',
    image: '/images/cookies.webp',
  },
  {
    title: 'Dragon Hills 2',
    description: 'Zombies, dragons, thrilling battles and pure destructive fun for everyone!',
    image: '/images/dragon_hills2.webp',
  },
  {
    title: 'Dragon Hills',
    description: 'Take control of a very dangerous Dragon in this action-packed adventure.',
    image: '/images/dragon_hills.png',
  },
  {
    title: 'Daddy Was A Thief',
    description: 'Shatter and smash menacing asteroids with powerful weapons!',
    image: '/images/daddy_thief.webp',
  },
  {
    title: 'Aliens Drive Me Crazy',
    description: 'Smash everything in this crazy, chaotic, simple but challenging, and fun game!',
    image: '/images/alien_crazy.webp',
  },
  {
    title: 'Crumble Zone',
    description: 'One of our first projects',
    image: '/images/crumble_zone.webp',
  },
];

const OurGames: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="py-12 bg-white"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">OUR GAMES</h2>
        <p className="text-gray-600 mb-12">Play our latest and the most popular games!</p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0 },
          }}
        >
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 mb-4">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={128}
                  height={128}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{game.title}</h3>
              <p className="text-gray-600 mt-2">{game.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurGames;
