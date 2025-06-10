import React, { useEffect, useState } from 'react';

const SportsSection = () => {
  const sportsImages = [
    { src: "/images/img_frame_10.png", alt: "Sports Activity 1" },
    { src: "/images/img_frame_9.png", alt: "Sports Activity 2" },
    { src: "/images/img_23082331.png", alt: "Sports Activity 3" },
    { src: "/images/img_frame_7.png", alt: "Sports Activity 4" },
    { src: "/images/img_frame_6.png", alt: "Sports Activity 5" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % sportsImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + sportsImages.length) % sportsImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-[110px] px-[70px]">
      <div className="max-w-[1300px] mx-auto text-center mb-[72px]">
        {/* Section Heading */}
        <h2 className="text-[40px] leading-[70px] capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[40px]">
  <span>Sports & Extracurricular </span>
  <span className="text-[76px] leading-[70px]">Excellence</span>
</h2>


        {/* Image Display Box */}
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
          {sportsImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute transition-all duration-1000 ease-in-out rounded-lg object-cover w-[800px] h-[400px] ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0 z-10'
                  : 'opacity-0 translate-y-10 z-0'
              }`}
            />
          ))}

          {/* Up Arrow */}
          <button
            onClick={prevImage}
            className="absolute top-4 right-1/2 translate-x-1/2 bg-black bg-opacity-10 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 z-20"
            aria-label="Previous Image"
          >
            ▲
          </button>

          {/* Down Arrow */}
          <button
            onClick={nextImage}
            className="absolute bottom-4 right-1/2 translate-x-1/2 bg-black bg-opacity-10 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 z-20"
            aria-label="Next Image"
          >
            ▼
          </button>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
