import React, { useState, useEffect } from 'react';

const sliderData = [
  {
    id: 1,
    image: '/images/slider/slide3.png',
    image2x: '/images/slider/slide3@2x.png',
    alt: 'PubLaw Project brand design',
    quote: "I'm not a designer, when I had to make a logo I found myself staring at a blank screen. Brandmark made the process actually enjoyable",
    name: 'Valentyna Kuzmych',
    position: 'CEO, PubLaw Project',
    userPic: '/images/userpic3.png',
    userPic2x: '/images/userpic3@2x.png',
  },
  {
    id: 2,
    image: '/images/slider/slide2.png',
    image2x: '/images/slider/slide2@2x.png',
    alt: 'NobleTide brand design',
    quote: "I tried other logo makers and Brandmark is the best value. Quality is exceptional and includes a complete branding solution for my company",
    name: 'Courtney Costrino',
    position: 'Founder, Noble Tide LLC',
    userPic: '/images/userpic2.png',
    userPic2x: '/images/userpic2@2x.png',
  },
  {
    id: 3,
    image: '/images/slider/slide1.png',
    image2x: '/images/slider/slide1@2x.png',
    alt: 'Hwear brand design',
    quote: "I was afraid to pay thousands for a logo that didn't turn out right for my business. The Brandmark team helped me create a logo that I love!",
    name: 'Sarah Locatelli',
    position: 'Founder, Loctia',
    userPic: '/images/userpic1.png',
    userPic2x: '/images/userpic1@2x.png',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider mt-0 bg-gradient-to-r from-yellow-100 via-yellow-300 to-gray-500 relative overflow-hidden">
      <div
        className="slider__list flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderData.map((slide) => (
          <div key={slide.id} className="slider__item w-full flex-shrink-0">
            <div className="slider__box flex-col-reverse justify-center">
            <div className="slider__box-cover mb-10">
                <img
                  className="slider__box-cover-img z-10"
                  src={slide.image}
                  srcSet={`${slide.image2x} 2x`}
                  alt={slide.alt}
                />
              </div>
              <div className="slider__box-review p-6">
                <div className="slider__box-review-box bg-white rounded-lg p-4">
                  <div className="slider__box-review-quote text-gray-700 italic">
                  <svg className="ico-svg ico-svg__quote inline-block m-2 w-4 h-4">
                      <use xlinkHref="/images/icons.svg#quote"></use>
                    </svg>
                    {slide.quote}
                  </div>
                  <div className="slider__box-user flex items-center mt-4">    
                    <div className="slider__box-user-info">
                      <div className="slider__box-user-name font-bold text-gray-900">{slide.name}</div>
                      <div className="slider__box-user-position text-gray-600 text-sm">{slide.position}</div>
                    </div>
                    <img
                      src={slide.userPic}
                      srcSet={`${slide.userPic2x} 2x`}
                      alt={slide.name}
                      className="slider__box-user-ico w-12 h-12 rounded-full mr-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider__page flex justify-center m-8 ">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`slider__page-item w-4 h-4 m-1 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-slate-800' : 'bg-white'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
