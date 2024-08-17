import React from 'react';
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
    image: '/images/castle-master-td.png', // Image path
  },
  {
    title: 'Cookies Must Die',
    description: 'Stop a group of evil, mutant cookies before they reduce whole city to rubble!',
    image: '/images/cookies-must-die.png',
  },
  {
    title: 'Dragon Hills 2',
    description: 'Zombies, dragons, thrilling battles and pure destructive fun for everyone!',
    image: '/images/dragon-hills-2.png',
  },
  {
    title: 'Dragon Hills',
    description: 'Take control of a very dangerous Dragon in this action-packed adventure.',
    image: '/images/dragon-hills.png',
  },
];

const OurGames: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">OUR GAMES</h2>
        <p className="text-gray-600 mb-12">Play our latest and the most popular games!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGames;
