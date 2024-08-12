import React from 'react';
import '../styles/creations.css';

const creationsData = [
  { id: 1, src: '/images/logos2/i0.svg', alt: 'CIELA MONTESSORI' },
  { id: 2, src: '/images/i2.jpg', srcSet: '/images/i2@2x.jpg 2x', alt: 'No BS' },
  { id: 3, src: '/images/logos2/i1.svg', alt: 'The Local Know' },
  { id: 4, src: '/images/logos2/i2.svg', alt: 'YOUTUI' },
  { id: 5, src: '/images/logos2/i3.svg', alt: 'Monkspace' },
  { id: 6, src: '/images/logos2/i4.svg', alt: 'COCO' },
  { id: 7, src: '/images/logos2/i5.svg', alt: 'funfit' },
  { id: 8, src: '/images/logos2/i6.svg', alt: 'GOOMOE' },
  { id: 9, src: '/images/logos2/i7.svg', alt: 'Wooly Waif' },
  { id: 10, src: '/images/logos2/i8.svg', alt: 'PathBase' },
  { id: 11, src: '/images/logos2/i9.svg', alt: 'BENSON' },
  { id: 12, src: '/images/logos2/i10.svg', alt: 'Lizzty' },
  { id: 13, src: '/images/logos2/i12.svg', alt: 'lighten' },
  { id: 14, src: '', alt: '' }, // Placeholder for empty grid
  { id: 15, src: '/images/logos2/i11.svg', alt: 'COLONETICS' },
  { id: 16, src: '', alt: '' }, // Placeholder for empty grid
];

const Creations = () => {
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.style.display = 'none'; // Hide the image if it fails to load
  };

  return (
    <section className="creations py-12 bg-white">
      <div className="creations__box max-w-6xl mx-auto px-4">

        <div className="creations__main text-center mb-8">
          <div className="creations__main-title text-2xl font-semibold text-gray-900 relative">
            Latest customer creations
            <span className="absolute z-[-1] bottom-0 left-1/2 w-[178px] h-4 bg-[rgba(255,151,198,0.5)] transform -translate-x-1/2"></span>
          </div>
          <div className="creations__main-note text-gray-600 mt-2">
            See why over 108,704 users have created a logo with Brandmark.io
          </div>
        </div>

        <div className="creations__list grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {creationsData.map((creation) => (
            creation.src ? (
              <div key={creation.id} className="creations__item">
                <img
                  className="creations__item-img w-full h-auto object-contain transform transition-transform duration-300 hover:scale-105"
                  src={creation.src}
                  srcSet={creation.srcSet}
                  alt={creation.alt}
                  onError={handleImageError}
                />
              </div>
            ) : (
              <div key={creation.id} className="creations__item"></div> // Empty grid item
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;
