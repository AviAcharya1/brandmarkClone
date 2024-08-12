import React from 'react';

const ChatInterface = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-gray-300">
      <div className="w-[375px] h-[812px] bg-white border-zinc-800 rounded-[50px] shadow-2xl overflow-hidden relative hover:scale-105 transition-transform">
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-7 bg-black rounded-b-3xl"></div>
        
        {/* Status bar */}
        <div className="border-black pt-14 px-6 flex justify-between text-sm">
          <span>9:41</span>
          <div className="flex space-x-2">  
            <span>🛜</span>       
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>
        
        {/* Chat area */}
        <div className="mt-4 px-4 space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-[70%] bg-blue-500 text-white p-3 rounded-2xl rounded-tr-sm">
              <p>Can you put the icon on a hexagonal container, change the text to green, and also remove the tagline</p>
            </div>
            <img src="https://placekitten.com/40/40" alt="User" className="w-8 h-8 rounded-full ml-2" />
          </div>
          
          {/* AI response */}
          <div className="flex justify-start">
            <img src="https://placekitten.com/41/41" alt="AI" className="w-8 h-8 rounded-full mr-2" />
            <div className="max-w-[70%] bg-gray-200 p-3 rounded-2xl rounded-tl-sm">
              <p className="mb-2">Sure thing, how does this look?</p>
              <div className="bg-black w-32 h-32 rounded-xl flex items-center justify-center">
                <div className="bg-green-500 w-20 h-20 rotate-45 flex items-center justify-center">
                  <span className="text-black text-2xl -rotate-45">M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;