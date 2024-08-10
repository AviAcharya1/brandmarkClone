import React from 'react';
import { motion } from 'framer-motion';

const Customization = () => {
  return (
    <section className="py-20 bg-blue-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">The only logo maker with free customization</h2>
          <p className="text-xl mb-6">We'll personally help you customize your logo with the purchase of any package.</p>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="/path-to-customization-image.png" alt="Customization example" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Customization;