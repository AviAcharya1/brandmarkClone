// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import SideToolbar from './SideToolbar';

// const Header = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <header className="bg-gray-800 text-white shadow-md p-4 fixed w-full top-0 z-40">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold">BRANDMARK</div>
//           {isMobile ? (
//             <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
//               <FontAwesomeIcon icon={faBars} />
//             </button>
//           ) : (
//             <nav>
//               <ul className="flex space-x-4">
//                 <li><Link to="/tools" className="hover:text-gray-300">Tools</Link></li>
//                 <li><Link to="/pricing" className="hover:text-gray-300">Pricing</Link></li>
//                 <li><Link to="/support" className="hover:text-gray-300">Support</Link></li>
//                 <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
//               </ul>
//             </nav>
//           )}
//         </div>
//       </header>
//       {isMobile && <SideToolbar isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />}
//     </>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BRAND<span className="text-gray-800">MARK</span>
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Tools</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Pricing</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Support</a>
          <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700">Login</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <a href="#" className="block py-2 text-gray-800 hover:text-gray-600">Tools</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-gray-600">Pricing</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-gray-600">Support</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-gray-600">Login</a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;