import React from 'react';

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Funmilayo',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg', // Example image URL
    quote: '“This is one of the most satisfying games to play. I always find myself downloading whenever I get a new phone”',
  },
  {
    name: 'Harry',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg', // Example image URL
    quote: '“What a nice & amazing game it is!! I never see this type of game there. I just 😘😍 love this game”',
  },
  {
    name: 'Dallen',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg', // Example image URL
    quote: '“The game is breathtaking. Every moment is surprising.”',
  },
  {
    name: 'Elliot',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg', // Example image URL
    quote: '“Love the story, bosses, power-ups, and the crazy side to the game. Well done!”',
  },
];

const TestimonialsComponent: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">FROM OUR PLAYERS</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center md:items-start">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-center md:text-left text-lg text-gray-800">{testimonial.quote}</p>
            <p className="text-center md:text-left text-sm font-semibold mt-4">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsComponent;
