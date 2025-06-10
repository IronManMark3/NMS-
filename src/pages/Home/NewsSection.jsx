import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      src: "/images/img_img0211.png",
      alt: "News Item 1",
      className: "w-[176px] h-[513px]"
    },
    {
      src: "/images/img_img0207.png",
      alt: "News Item 2", 
      className: "w-[176px] h-[513px]"
    },
    {
      src: "/images/img_img0206.png",
      alt: "Featured News",
      className: "w-[513px] h-[513px]",
      title: "Neerja Modi School Players Shine in SGFI U-19 State Cricket Tournament.",
      featured: true
    },
    {
      src: "/images/img_img0209.png",
      alt: "News Item 4",
      className: "w-[176px] h-[513px]"
    },
    {
      src: "/images/img_img0208.png", 
      alt: "News Item 5",
      className: "w-[176px] h-[513px]"
    }
  ];

  return (
    <section className="bg-white py-[57px] px-[81px]">
      <div className="max-w-[1277px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[57px] leading-[87px] text-left capitalize text-black mb-[12px]">
            News &
          </h2>
          <div className="text-[162px] leading-[197px] text-left uppercase bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[0px]">
            Media
          </div>
          <p className="text-[18px] leading-[27px] text-center capitalize text-black max-w-[521px] mx-auto">
            Showcasing Our Achievements, Announcements, and Press Highlights.
          </p>
        </div>

        {/* News Grid */}
        <div className="flex gap-[0px] justify-center" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group overflow-hidden rounded-md"
            >
              {item.featured ? (
                <div className="relative">
                  <img 
                    src={item.src}
                    alt={item.alt}
                    className={`${item.className} object-cover rounded-md transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="absolute bottom-[31px] left-[31px] right-[31px]">
                    <h3 className="text-[27px] font-bold leading-[31px] text-left capitalize text-white max-w-[377px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ) : (
                <img 
                  src={item.src}
                  alt={item.alt}
                  className={`${item.className} object-cover rounded-md transition-transform duration-500 group-hover:scale-105`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
