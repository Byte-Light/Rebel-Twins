import React from 'react';

interface StatsComponentProps {
  downloads: number;
  games: number;
  cupsOfCoffee: number;
}

const StatsComponent: React.FC<StatsComponentProps> = ({ downloads, games, cupsOfCoffee }) => {
  return (
    <div className="bg-yellow-400 text-center py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white font-bold text-4xl">
          <div>
            <p>{downloads.toLocaleString()}</p>
            <p className="text-lg mt-2">DOWNLOADS</p>
          </div>
          <div>
            <p>{games}</p>
            <p className="text-lg mt-2">GAMES</p>
          </div>
          <div>
            <p>{cupsOfCoffee.toLocaleString()}</p>
            <p className="text-lg mt-2">CUPS OF COFFEE</p>
          </div>
        </div>
        <div className="mt-16 text-3xl font-bold">
          WE’RE HERE FOR YOU!
        </div>
        <div className="text-xl mt-4">
          GENERATING NEW IDEAS.
        </div>
        <p className="text-lg mt-4 text-gray-800">
          We are focused on creating and publishing high quality and incredibly addictive games for iOS and Android.
        </p>
      </div>
    </div>
  );
};

export default StatsComponent;
