import React from "react";
import Image from "next/image";

const YouTubePlayer: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="relative w-[50%] h-[50%] bg-yellow-400 rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src="/path/to/your/image.png" // Replace with the correct path to your image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />

        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Play Button */}
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <div className="bg-white p-4 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200">
            <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* YouTube iframe */}
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl z-30"
            src="https://www.youtube.com/embed/muxag4G1q14"
            title="Dragon Hills 2 - Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
