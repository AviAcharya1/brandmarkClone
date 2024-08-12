import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideToolbar from './SideToolbar';
import Logo from './Logo';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="w-full top-0 z-40 bg-yellow-300 py-4">
        <div className="container mx-auto flex justify-evenly m-12 items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo isMobile={isMobile} />
          </motion.div>
          {isMobile ? (
            <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
              <FontAwesomeIcon icon={faBars} />
            </button>
          ) : (
            <nav>
                <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
                <li><Link to="/tools" className="hover:text-gray-700">Tools</Link></li>
                <li><Link to="/pricing" className="hover:text-gray-700">Pricing</Link></li>
                <li><Link to="/support" className="hover:text-gray-700">Support</Link></li>
                <li>
                  <Link to="/login" className="bg-white text-yellow-300 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                    Login
                  </Link>
                  </li>
                  <li><Link to="/weather" className="hover:text-gray-700">Weather</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      {isMobile && <SideToolbar isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />}
    </>
  );
};

export default Header;