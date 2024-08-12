import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-20 mb-12">
          <div>
            <h2 className="font-bold text-lg mb-2 text-yellow-400 hover:underline cursor-pointer">Create your logo</h2>
            <p className="text-gray-400">Try Brandmark for free, no account needed</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 text-pink-500 hover:underline cursor-pointer">Support</h2>
            <p className="text-gray-400">Have questions or need help? Start here.</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 text-green-400 hover:underline cursor-pointer">Tools</h2>
            <p className="text-gray-400">Check out our free tools for color, font and logo design</p>
          </div>
        </div>
        <div className="flex justify-evenly space-x-16 mb-16">
          <div className="text-gray-400 hover:text-gray-100 cursor-pointer">Terms of service</div>
          <div className="text-gray-400 hover:text-gray-100 cursor-pointer">Privacy policy</div>
        </div>
      </div>
      <div className="flex relative h-40">
        <div className="absolute left-60 top-0 w-12 h-12 bg-yellow-400 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-300"></div>
        <div className="absolute left-48 top-12 w-12 h-12 bg-pink-500 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-300"></div>
        <div className="absolute right-60 top-12 w-12 h-12 bg-green-400 transform translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-300"></div>
        <div className="absolute right-48 top-24 w-12 h-12 bg-blue-400 transform translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-300"></div>
      </div>
    </footer>
  );
};

export default Footer;