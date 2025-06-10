import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Welcome to Neerja Modi School",
    backgroundImage: "/images/img_.png"
  },
  {
    id: 2,
    title: "Excellence in Education",
    backgroundImage: "/images/slide2.png"
  },
  {
    id: 3,
    title: "Shaping Future Leaders",
    backgroundImage: "/images/slide3.png"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.backgroundImage;
    });
  }, []);

  return (
    <section className="relative h-[750px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {index === currentSlide && (
            <div className="absolute bottom-[60px] left-0 right-0 z-20 px-[57px] text-white">
              <p className="text-[25px] leading-[40px] uppercase mb-2">
                Welcome to
              </p>
              <h1 className="text-[76px] leading-[93px] uppercase mb-8 max-w-[917px]">
                {slide.title}
              </h1>
            </div>
          )}
        </div>
      ))}

      <div className="absolute right-[61px] top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[12px] h-[12px] rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
