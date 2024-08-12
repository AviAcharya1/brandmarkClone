import React from 'react';
import { motion } from 'framer-motion';

const Chat = () => {
  return (
    <div className="chat py-10 bg-gray-100">
      <div className="chat__box container mx-auto p-5 shadow-lg rounded-lg bg-white">
        <div className="chat__box-line">
          <motion.div
            className="chat__main"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="chat__main-title text-2xl font-bold">The only logo maker with free customization</div>
            <div className="chat__main-note text-lg">We’ll personally help you customize your logo with the purchase of any package.</div>
          </motion.div>

          <div className="chat__phone mt-5">
            <div className="chat__list">
              <motion.div
                className="chat__list-item chat__list-item--s1 flex items-center mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src="/images/userpic3.png" srcSet="/images/userpic4@2x.png 2x" alt="customer" className="chat__list-item-userpic w-12 h-12 rounded-full mr-4" />
                <div className="chat__list-item-note bg-blue-500 text-white p-4 rounded-lg">
                  Can you put the icon on a hexagonal container, change the text to green, and also remove the tagline?
                </div>
              </motion.div>

              <motion.div
                className="chat__list-item chat__list-item--s2 flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="chat__list-item-note bg-gray-200 p-4 rounded-lg flex ml-40">
                  <img src="/images/logos2/la.png" srcSet="/images/logos2/la@2x.png 2x" alt="Monkspace" className="chat__list-item-extra-img w-10 h-10 mr-4" />
                  <div className="chat__list-item-txt">Sure thing, how does this look?</div>
                </div>
                <img src="/images/userpic5.png" srcSet="/images/userpic5@2x.png 2x" alt="Jack" className="chat__list-item-userpic w-12 h-12 rounded-full mr-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
