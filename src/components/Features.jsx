import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    { icon: '📄', text: 'Logo design files' },
    { icon: '💼', text: 'Business card designs' },
    { icon: '📝', text: 'Letterhead templates' },
    { icon: '📊', text: 'Presentation templates' },
    { icon: '🖼️', text: 'Social profile icons' },
    { icon: '🎬', text: 'Animated designs' },
    { icon: '📱', text: 'Social media designs' },
    { icon: '📘', text: 'Brand guide' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Build a beautiful brand on time and on budget</h2>
        <p className="text-xl mb-10 text-center">Kickstart your business with thousands of ready-to-use design assets.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-2xl mr-2">{feature.icon}</span>
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.button 
          className="mt-10 mx-auto block bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See example assets
        </motion.button>
      </div>
    </section>
  );
};

export default Features;