"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Funmilayo',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    quote: '“This is one of the most satisfying games to play. I always find myself downloading whenever I get a new phone”',
  },
  {
    name: 'Harry',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: '“What a nice & amazing game it is!! I never see this type of game there. I just 😘😍 love this game”',
  },
  {
    name: 'Dallen',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    quote: '“The game is breathtaking. Every moment is surprising.”',
  },
  {
    name: 'Elliot',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    quote: '“Love the story, bosses, power-ups, and the crazy side to the game. Well done!”',
  },
];

const TestimonialsComponent: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-white py-16 px-4"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">FROM OUR PLAYERS</h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          hidden: { opacity: 0 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center md:items-start"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-center md:text-left text-lg text-gray-800">{testimonial.quote}</p>
            <p className="text-center md:text-left text-sm font-semibold mt-4">{testimonial.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsComponent;
