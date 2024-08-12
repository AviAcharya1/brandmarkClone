import React from 'react';

const ToolItem = ({ letter, title, description, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-28 text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer`}>
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold">{letter}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
};

export default function Tools() {
  return (
    <div className="relative">
      {/* Background div that extends halfway */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gray-900 z-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-6 pb-30">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Brandmark tools</h2>
            <p className="text-xl text-blue-300">
              Use our free AI-powered design tools to get<br />
              color and font ideas for your next logo project
            </p>
          </div>

          <div className="m-10 px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ToolItem
              letter="W"
              title="AI Color Wheel"
              description="Automatically colorize your graphic and logo designs"
              bgColor="bg-pink-500"
            />
            <ToolItem
              letter="R"
              title="Logo Rank"
              description="Upload your logo and see how it rates on a number of objective measures"
              bgColor="bg-green-400"
            />
            <ToolItem
              letter="C"
              title="Logo Crunch"
              description="Make a multi-resolution logo for use in favicons, Android and iOS apps"
              bgColor="bg-blue-400"
            />
            <ToolItem
              letter="F"
              title="Font Generator"
              description="Get font pairing ideas for your website, shop or blog"
              bgColor="bg-yellow-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}