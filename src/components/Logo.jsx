import React from 'react';

const Logo = ({ isMobile }) => {
  return (
    <div className="text-3xl font-bold">
      {isMobile ? (
        <span className="text-white">B</span>
      ) : (
        <>
          <span className="text-white">BRAND</span>
          <span className="text-gray-800">MARK</span>
        </>
      )}
    </div>
  );
};

export default Logo;