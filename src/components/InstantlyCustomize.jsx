import React from 'react';
import { motion } from 'framer-motion';

const InstantlyCustomize = () => {
  return (
    <div className="instantly py-10 bg-gray-50">
      <div className="instantly__box container mx-auto p-5 shadow-lg rounded-lg bg-white">
        <motion.div
          className="instantly__main text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="instantly__title text-3xl font-bold">Instantly customize and export</div>
          <div className="instantly__note text-lg">Right in your browser, no designer or software needed.</div>
        </motion.div>

        <div className="instantly__preview flex flex-col md:flex-row">
          <motion.div
            className="instantly__preview-box md:w-1/2 mb-5 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/settings.gif" alt="img" className="instantly__preview-img w-full h-auto" />
          </motion.div>

          <div className="instantly__preview-note md:w-1/2 space-y-5">
            <motion.div
              className="instantly__preview-info instantly__preview-info--s1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="instantly__preview-title text-xl font-bold">Export to all major formats</div>
              <div className="instantly__preview-text">Including SVG, EPS, PNG and PDF</div>
            </motion.div>

            <motion.div
              className="instantly__preview-info instantly__preview-info--s2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="instantly__preview-title text-xl font-bold">Adjust text and image size</div>
              <div className="instantly__preview-text">Perfectly sized for web and print</div>
            </motion.div>

            <motion.div
              className="instantly__preview-info instantly__preview-info--s3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="instantly__preview-title text-xl font-bold">Easily edit and customize</div>
              <div className="instantly__preview-text">Double click to edit text</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantlyCustomize;
