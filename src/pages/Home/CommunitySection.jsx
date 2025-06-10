import React from 'react';

const CommunitySection = () => {
  const communityImages = [
    {
      src: "/images/img_0120.png",
      alt: "Community Service 1"
    },
    {
      src: "/images/img_0120_403x588.png", 
      alt: "Community Service 2"
    },
    {
      src: "/images/img_0120_1.png",
      alt: "Community Service 3"
    },
    {
      src: "/images/img_0120.png",
      alt: "Community Service 1"
    },
    {
      src: "/images/img_0120_403x588.png", 
      alt: "Community Service 2"
    },
    {
      src: "/images/img_0120_1.png",
      alt: "Community Service 3"
    },
    {
      src: "/images/img_0120.png",
      alt: "Community Service 1"
    },
    {
      src: "/images/img_0120_403x588.png", 
      alt: "Community Service 2"
    },
    {
      src: "/images/img_0120_1.png",
      alt: "Community Service 3"
    }
  ];

  return (
    <section className="bg-white py-[110px] px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[72px]">
        <h2 className="text-[40px] leading-[48px] text-center capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
  Community Service & Social Initiatives
</h2>

        </div>

        {/* Horizontal Scrollable Community Images */}
        <div className="overflow-x-auto scroll-smooth custom-scrollbar">
          <div className="flex gap-[30px] w-max px-4">
            {communityImages.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[400px] h-[280px] overflow-hidden rounded-md shadow-lg transition-transform duration-500 hover:scale-105"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
