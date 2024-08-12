import React from 'react';
import { motion } from 'framer-motion';

const Feature = ({ icon, title, description }) => (
  <motion.div
    className="flex items-center mb-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const LogoDesign = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="lg:flex lg:items-center">
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Feature
              icon={<div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white">C</div>}
              title="Full copyright included"
              description="For use in commercial and personal projects"
            />
            <Feature
              icon={<div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white">∞</div>}
              title="Unlimited revisions"
              description="Modify your logo at any time, even after purchase"
            />
          </div>
        </div>
        <motion.div 
          className="lg:w-1/3 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Create your unique logo design</h2>
          <p className="text-gray-600 mb-6">generate unlimited logos for free</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Create my logo
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LogoDesign;