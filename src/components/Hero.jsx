import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-20 bg-yellow-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Create a unique, professional logo for your business</h2>
          <p className="text-xl mb-6">Kickstart your brand with business card designs, social media graphics, app icons, letter heads and more</p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 transition duration-300">Create my logo</button>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="/image.png" alt="Logo examples" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;