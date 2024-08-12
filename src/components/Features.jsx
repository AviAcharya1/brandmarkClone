import React from 'react';

const featuresData = [
  {
    id: 's1',
    title: 'No more designer anxiety',
    note: 'Get your logo instantly, not in weeks.',
    color: 'text-[#ee5495]',
    fill: 'fill-[#ee5495]',
  },
  {
    id: 's2',
    title: 'Need a tweak to your design?',
    note: "We'll do it for you, absolutely free",
    color: 'text-[#79b790]',
    fill: 'fill-[#79b790]',
  },
  {
    id: 's3',
    title: 'No monthly charges',
    note: 'Pay once, get access to our branding tools forever.',
    color: 'text-[#9baed9]',
    fill: 'fill-[#9baed9]',
  },
  {
    id: 's4',
    title: 'Full copyright included',
    note: 'For use in commercial and personal projects',
    color: 'text-[#e3a624]',
    fill: 'fill-[#e3a624]',
  },
  {
    id: 's5',
    title: 'Unlimited revisions',
    note: 'Modify your logo at any time, even after purchase',
    color: 'text-[#292e34]',
    fill: 'fill-[#292e34]',
  },
];

const Features = () => {
  return (
    <div className="mb-[70px]">
      <div className="mx-auto px-4">
        <div className="flex flex-col mb-20">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={`w-full mx-auto text-center ${index === 0 ? 'mt-0' : 'mt-12'} ${feature.color}`}
            >
              <div className={`mb-4 text-center ${feature.fill}`}>
                <svg className="w-[5.4375em] h-[5.4375em] mx-auto">
                  <use xlinkHref={`images/icons.svg#${feature.id}`}></use>
                </svg>
              </div>
              <div>
                <div className="mb-1 text-[1.375em] font-bold leading-[1.22727em]">{feature.title}</div>
                <div className="text-[1.125em] leading-[1em]">{feature.note}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="mb-[0.1875em] text-[#292e34] text-[2em] font-bold leading-[1.21875em]">
            Create your unique logo design
          </div>
          <div className="text-[rgba(41,46,52,0.5)] text-[1.125em] leading-[1.44444em]">
            generate unlimited logos for free
          </div>
          
            <a className="inline-block mt-[3.125em] px-6 py-3 bg-blue-400 text-white bold rounded-3xl hover:bg-blue-300 transition-colors duration-200"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create my logo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;