// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="hero mt-0 p-20 bg-yellow-300">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         {/* Left Side: Text Content */}
//         <motion.div
//           className="hero__box-main md:w-1/2 mb-10 md:mb-0"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="hero__logo mb-4">
//             <a href="#3" className="hero__logo-link flex items-center">
//               <span className="hero__logo-note font-bold text-3xl mr-2">Brand</span>
//               <span className="hero__logo-note text-3xl">Mark</span>
//             </a>
//           </div>
//           <h2 className="hero__title text-4xl md:text-5xl font-bold mb-4">
//             Create a unique, professional logo for your business
//           </h2>
//           <p className="hero__note text-xl mb-6">
//             Kickstart your brand with business card designs, social media graphics, app icons, letterheads, and more.
//           </p>
//           <a 
//             href="https://app.brandmark.io/v3/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hero__action-btn ui-btn bg-gray-800 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 transition duration-300"
//             aria-label="Create my logo"
//           >
//             Create my logo
//           </a>
//         </motion.div>

//         {/* Right Side: Image Content */}
//         <motion.div
//           className="hero__image md:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           {/* <img src="/image.png" alt="Logo examples" className="w-full object-cover" /> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero h-96 p-16 md:p-20 bg-yellow-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="hero__box-main md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="hero__title text-4xl md:text-5xl font-bold mb-4">
            Create a unique, professional logo for your business
          </h2>
          <p className="hero__note text-xl mb-6">
            Kickstart your brand with business card designs, social media graphics, app icons, letterheads, and more.
          </p>
          
          <a href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__action-btn ui-btn bg-gray-800 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 transition duration-300"
            aria-label="Create my logo"
          >
            Create my logo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;