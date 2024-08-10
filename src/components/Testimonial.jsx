import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl mb-4">"I was afraid to pay thousands for a logo that didn't turn out right for my business. The Brandmark team helped me create a logo that I love!"</p>
          <div className="flex items-center">
            <img src="/path-to-profile-image.jpg" alt="Sarah Locatelli" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Sarah Locatelli</p>
              <p className="text-gray-600">Founder, Loctia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;