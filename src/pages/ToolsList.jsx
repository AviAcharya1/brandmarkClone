import React from 'react';

const ToolsList = () => {
  const tools = [
    { name: 'Logo Maker', description: 'Create professional logos in seconds.' },
    { name: 'Color Palette Generator', description: 'Generate beautiful color palettes.' },
    { name: 'Font Pairing', description: 'Find the perfect font combinations.' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Tools</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold">{tool.name}</h3>
              <p className="mt-2">{tool.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Try it out
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsList;
