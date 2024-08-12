import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faDollarSign, faEnvelope, faSignInAlt, faEllipsisH, faTimes, faChevronUp, faCloudSunRain, faHome, faCalculator, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const SideToolbar = ({ isOpen, toggleMenu, toggleWidget }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubWidget = () => {
    setIsWidgetOpen(!isWidgetOpen);
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
            <Link to="/" className="flex items-center justify-between hover:text-gray-400" onClick={toggleMenu}>
              <span>Home</span>
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/tools" className="flex items-center justify-between hover:text-gray-400" onClick={toggleMenu}>
              <span>Tools</span>
              <FontAwesomeIcon icon={faCube} />
            </Link>
            <Link to="/pricing" className="flex items-center justify-between hover:text-gray-400" onClick={toggleMenu}>
              <span>Pricing</span>
              <FontAwesomeIcon icon={faDollarSign} />
            </Link>
            <Link to="/support" className="flex items-center justify-between hover:text-gray-400" onClick={toggleMenu}>
              <span>Support</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link to="/login" className="flex items-center justify-between hover:text-gray-400" onClick={toggleMenu}>
              <span>Login</span>
              <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
          </>
        )}
      </div>

      <div className="flex flex-col p-4 space-y-4">
        <button onClick={toggleSubWidget} className="flex justify-between items-center w-full">
          <span>Widgets</span>
          <FontAwesomeIcon icon={isWidgetOpen ? faChevronUp : faEllipsisH} />
        </button>
        {isWidgetOpen && (
          <>
            <Link to="/weather" className="flex items-center justify-between hover:text-gray-400" onClick={toggleWidget}>
              <span>Weather</span>
              <FontAwesomeIcon icon={faCloudSunRain} />
            </Link>
            <Link to="/calculator" className="flex items-center justify-between hover:text-gray-400" onClick={toggleWidget}>
              <span>Calculator</span>
              <FontAwesomeIcon icon={faCalculator} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SideToolbar;
