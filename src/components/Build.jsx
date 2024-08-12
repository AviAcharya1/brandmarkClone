import React from 'react';
import { motion } from 'framer-motion';

const Build = () => {
  const features = [
    { icon: 'ico-svg ico-svg__doc', text: 'Logo design files' },
    { icon: 'ico-svg ico-svg__card', text: 'Business card designs' },
    { icon: 'ico-svg ico-svg__paper', text: 'Letterhead templates' },
    { icon: 'ico-svg ico-svg__presentation', text: 'Presentation templates' },
    { icon: 'ico-svg ico-svg__profile', text: 'Social profile icons' },
    { icon: 'ico-svg ico-svg__favicon', text: 'Animated designs' },
    { icon: 'ico-svg ico-svg__cover', text: 'Social media designs' },
    { icon: 'ico-svg ico-svg__guide', text: 'Brand guide' },
  ];

  return (
    <section className="py-20 bg-white build">
      <div className="container mx-auto px-4">
        <div className="build__box">
          <div className="build__box-row flex flex-col md:flex-row items-center">
            <div className="build__cover w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src="images/i1.jpg"
                srcSet="images/i1%402x.jpg 2x"
                className="build__cover-img w-full"
                alt="Build Cover"
              />
              <div className="build__cover-decor">
                <svg className="ico-svg ico-svg--planet">
                  <use xlinkHref="images/icons.svg#planet"></use>
                </svg>
              </div>
              <div className="build__cover-decor2"></div>
            </div>
            <div className="build__main w-full md:w-1/2 text-center md:text-left">
              <div className="build__main-title text-2xl font-bold mb-4">
                Build a beautiful brand on time and on budget
              </div>
              <div className="build__main-note text-lg text-gray-600 mb-8">
                Kickstart your business with thousands of <b>ready-to-use</b> design assets.
              </div>
              <div className="build__main-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="build__main-list-item flex items-center justify-center p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <svg className={`${feature.icon} w-10 h-10`}>
                      <use xlinkHref={`images/icons.svg#${feature.icon.split(' ')[1].replace('ico-svg__', '')}`}></use>
                    </svg>
                    <span className="ml-2 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 mx-auto block bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 build__main-action-btn ui-btn ui-btn--size-normal ui-btn--theme-light"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="ui-btn__box" tabIndex="-1">
                  <svg className="ico-svg ico-svg--out ml-32 pt-2 size-8">
                    <use xlinkHref="images/icons.svg#out"></use>
                  </svg>
                  See example assets
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Build;
