import React, { useEffect, useState } from 'react';

const BoardingSection = () => {
  const images = [
    "/images/hostel1.png",
    "/images/hostel2.png",
    "/images/hostel3.png",
    "/images/hostel4.png",
    "/images/hostel5.png"
  ];

  const [centerIndex, setCenterIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % images.length);
    }, 2000); // ⏱️ Now rotates every 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const getPositionStyle = (index) => {
    const left = (centerIndex - 1 + images.length) % images.length;
    const right = (centerIndex + 1) % images.length;

    if (index === centerIndex) return "scale-100 z-20 opacity-100";
    if (index === left || index === right) return "scale-90 z-10 opacity-80";
    return "scale-75 z-0 opacity-0 pointer-events-none";
  };

  return (
    <section className="bg-white py-[125px] px-[81px] overflow-hidden">
      <div className="max-w-[1277px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-[76px]">
          <h2 className="text-[71px] leading-[86px] text-center uppercase bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[12px]">
            Boarding Life
          </h2>
          <p className="text-[22px] font-light leading-[33px] tracking-[6px] text-center uppercase text-black mb-[37px]">
            A Home Away from Home
          </p>
          <p className="text-[18px] leading-[27px] text-center capitalize text-black max-w-[744px] mx-auto">
            At NMS, our boarding school is not just a place to stay—
            <br />
            it is a community where students grow, learn, and thrive in a nurturing and supportive environment, just like home.
          </p>
        </div>

        {/* Smooth Carousel */}
        <div className="relative h-[420px] flex justify-center items-center">
          {images.map((img, index) => {
            const position = getPositionStyle(index);
            const width = index === centerIndex ? '600px' : '400px';
            const height = index === centerIndex ? '400px' : '300px';
            const left =
              index === centerIndex
                ? 'calc(50% - 300px)'
                : index === (centerIndex - 1 + images.length) % images.length
                ? 'calc(50% - 450px)'
                : index === (centerIndex + 1) % images.length
                ? 'calc(50% + 50px)'
                : '50%';

            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-in-out transform rounded overflow-hidden shadow-xl ${position}`}
                style={{ width, height, left }}
              >
                <img
                  src={img}
                  alt={`Boarding ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            );
          })}
        </div>

        {/* Hostel Facilities Section */}
        <div className="mt-[80px] flex flex-col items-center justify-center text-center">
          <div className="w-[80px] h-[5px] bg-gradient-to-r from-[#c30015] to-[#0025ae] rounded-full mb-[20px]" />
          
          {/* Gradient Heading */}
          <h3 className="text-[40px] leading-[50px] mb-[12px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
            Perfect Blend Of Comfort,<br />Security & Learning
          </h3>

          <div className="flex flex-col items-center gap-[40px] mt-[50px]">
            {/* Row 1: 5 Icons */}
            <div className="flex flex-wrap justify-center gap-[50px]">
              {[
                { icon: "/images/flask.png", label: "State-Of-The-Art facilities" },
                { icon: "/images/hand-shake.png", label: "Dedicated Support Staff" },
                { icon: "/images/confident.png", label: "Holistic development programs" },
                { icon: "/images/verified.png", label: "24/7 Security And Pastoral Care" },
                { icon: "/images/cereal.png", label: "Healthy & Nutricious Meals" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[110px] h-[110px] p-[10px] bg-[#f4f4f4] rounded-[20px] shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                    <img src={item.icon} alt={item.label} className="w-[60px] h-[60px] object-contain" />
                  </div>
                  <p className="mt-[10px] text-[14px] text-center max-w-[140px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2: 4 Icons */}
            <div className="flex flex-wrap justify-center gap-[50px] mt-[10px]">
              {[
                { icon: "/images/scholar.png", label: "Personalized Academic Support" },
                { icon: "/images/study.png", label: "Well-Equiped Study Areas" },
                { icon: "/images/soccer-player.png", label: "Modern Recreational Facilities" },
                { icon: "/images/sleep.png", label: "Comfortable & Spacious Dormitories" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[110px] h-[110px] p-[10px] bg-[#f4f4f4] rounded-[20px] shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                    <img src={item.icon} alt={item.label} className="w-[60px] h-[60px] object-contain" />
                  </div>
                  <p className="mt-[10px] text-[14px] text-center max-w-[140px] bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardingSection;
