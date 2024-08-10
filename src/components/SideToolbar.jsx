import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faDollarSign, faEnvelope, faSignInAlt, faEllipsisH, faTimes, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SideToolbar = ({ isOpen, toggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg font-bold">BRANDMARK</h1>
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <button onClick={toggleSubMenu} className="flex justify-between items-center w-full">
          <span>Menu</span>
          <FontAwesomeIcon icon={isMenuOpen ? faChevronUp : faEllipsisH} />
        </button>
        {isMenuOpen && (
          <>
            <Link to="/tools" className="flex items-center space-x-2 hover:text-gray-400" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faCube} />
              <span>Tools</span>
            </Link>
            <Link to="/pricing" className="flex items-center space-x-2 hover:text-gray-400" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faDollarSign} />
              <span>Pricing</span>
            </Link>
            <Link to="/support" className="flex items-center space-x-2 hover:text-gray-400" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Support</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-2 hover:text-gray-400" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faSignInAlt} />
              <span>Login</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SideToolbar;