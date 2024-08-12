import React from 'react';
import { motion } from 'framer-motion';
import '../styles/logos.css'

const logos = [
  { src: "/images/logos/l1.png", src2x: "/images/logos/l1@2x.png", width: "7.063em", alt: "Logo 1" },
  { src: "/images/logos/l2.png", src2x: "/images/logos/l2@2x.png", width: "4.625em", alt: "Logo 2" },
  { src: "/images/logos/l3.png", src2x: "/images/logos/l3@2x.png", width: "4.875em", alt: "Logo 3" },
  { src: "/images/logos/l4.png", src2x: "/images/logos/l4@2x.png", width: "7.563em", alt: "Logo 4" },
  { src: "/images/logos/l5.png", src2x: "/images/logos/l5@2x.png", width: "9.063em", alt: "Logo 5" }
];

const Logos = () => {
  return (
    <div className="m-10 logos py-10">
      <div className="logos__box container mx-auto px-4">
        <ul className="logos__list flex flex-wrap justify-around items-center">
          {logos.map((logo, index) => (
            <motion.li 
              className={`logos__item flex justify-center w-1/3 md:w-1/4`}
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={logo.src}
                srcSet={logo.src2x}
                style={{ width: logo.width }}
                alt={logo.alt}
                className="logos__img"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Logos;
