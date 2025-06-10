import React from 'react';

const LeadershipSection = () => {
  const leadershipImages = [
    {
      src: "/images/img_rectangle_3.png",
      alt: "Leadership Event 1",
      className: "w-[601px] h-[373px]"
    },
    {
      src: "/images/img_rectangle_5.png", 
      alt: "Leadership Event 2",
      className: "w-[274px] h-[329px]"
    },
    {
      src: "/images/img_rectangle_6.png",
      alt: "Leadership Event 3",
      className: "w-[274px] h-[329px]"
    },
    {
      src: "/images/img_rectangle_4.png",
      alt: "Leadership Event 4", 
      className: "w-[601px] h-[409px]"
    }
  ];

  return (
    <section className="bg-white py-[101px] px-[236px]">
      <div className="max-w-[968px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[72px]">
          <h2 className="text-[54px] leading-[81px] text-center capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
            Leadership & Distinguished Visitors
          </h2>
        </div>

        {/* Leadership Images Grid */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 overflow-hidden">
            <div className="transition-transform duration-500 ease-in-out hover:scale-105">
              <img 
                src={leadershipImages[0].src}
                alt={leadershipImages[0].alt}
                className={`${leadershipImages[0].className} object-cover`}
              />
            </div>
          </div>

          <div className="col-span-5 overflow-hidden">
            <div className="transition-transform duration-500 ease-in-out hover:scale-105 mb-4">
              <img 
                src={leadershipImages[1].src}
                alt={leadershipImages[1].alt}
                className={`${leadershipImages[1].className} object-cover`}
              />
            </div>
          </div>

          <div className="col-span-5 col-start-1 row-start-2 overflow-hidden">
            <div className="transition-transform duration-500 ease-in-out hover:scale-105">
              <img 
                src={leadershipImages[2].src}
                alt={leadershipImages[2].alt}
                className={`${leadershipImages[2].className} object-cover`}
              />
            </div>
          </div>

          <div className="col-span-7 col-start-6 row-start-2 overflow-hidden">
            <div className="transition-transform duration-500 ease-in-out hover:scale-105">
              <img 
                src={leadershipImages[3].src}
                alt={leadershipImages[3].alt}
                className={`${leadershipImages[3].className} object-cover`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
