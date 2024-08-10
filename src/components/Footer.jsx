import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-12">
      <div className="container mx-auto text-center space-y-8">
        <div className="flex justify-center space-x-10">
          <div>
            <h2 className="hover:text-yellow-400 font-bold text-lg">Create your logo</h2>
            <p>Try Brandmark for free, no account needed</p>
          </div>
          <div>
            <h2 className="hover:text-pink-500 font-bold text-lg">Support</h2>
            <p>Have questions or need help? Start here.</p>
          </div>
          <div >
            <h2 className="hover:text-green-400 font-bold text-lg">Tools</h2>
            <p>Check out our free tools for color, font, and logo design</p>
          </div>
        </div>
        <div className="flex justify-center space-x-16 mt-8">
          <div className="text-gray-400 hover:text-gray-100 cursor-pointer">Terms of service</div>
          <div className="text-gray-400 hover:text-gray-100 cursor-pointer">Privacy policy</div>
        </div>
        <div className="flex justify-center space-x-10">
            <div className="w-12 h-12 bg-pink-500 hover:transform hover:scale-110 transition duration-300"></div>
            <div className="w-12 h-12 bg-yellow-400 hover:transform hover:scale-110 transition duration-300"></div>
        </div>      
        <div className="flex justify-center space-x-10">
          <div className="w-12 h-12 bg-green-400 hover:transform hover:scale-110 transition duration-300"></div>
          <div className="w-12 h-12 bg-blue-400 hover:transform hover:scale-110 transition duration-300"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
