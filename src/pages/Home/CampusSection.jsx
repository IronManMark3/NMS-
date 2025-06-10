import React from 'react';

const CampusSection = () => {
  const campuses = [
    {
      name: "Mansarovar",
      image: "/images/img_image_13.png",
      className: "w-[713px] h-[482px]"
    },
    {
      name: "World School, Mansarovar",
      image: "/images/img_world_school.png",
      className: "w-[713px] h-[482px]"
    },
    {
      name: "Kalwara",
      image: "/images/img_image_14.png",
      className: "w-[468px] h-[317px]"
    },
    {
      name: "⁠Vaishali Nagar",
      backgroundImage: "/images/img__0x0.png",
      className: "w-[469px] h-[317px]"
    },
    {
      name: "Ajmer",
      image: "/images/img_image_15.png",
      className: "w-[468px] h-[317px]"
    }
  ];

  return (
    <section className="bg-white py-[0px] px-[0px]">
      <div className="max-w-[1443px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[37px]">
          <p className="text-[24px] leading-[36px] text-center uppercase text-black mb-[2px]">
            The world of
          </p>
          <h2 className="text-[54px] leading-[66px] text-center uppercase text-black">
            Neerja Modi School
          </h2>
        </div>

        {/* Campus Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Mansarovar - Large Left */}
          <div className="col-span-6 relative bg-[#e3e3e3] overflow-hidden">
            <img 
              src={campuses[0].image} 
              alt={campuses[0].name}
              className="w-full h-[482px] object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-[96px] left-[34px]">
              <h3 className="text-[25px] font-semibold leading-[38px] capitalize text-white">
                {campuses[0].name}
              </h3>
            </div>
          </div>

          {/* World School - Large Right */}
          <div className="col-span-6 relative bg-[#e3e3e3] overflow-hidden">
            <img 
              src={campuses[1].image} 
              alt={campuses[1].name}
              className="w-full h-[482px] object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-[91px] left-[29px]">
              <h3 className="text-[25px] font-semibold leading-[38px] capitalize text-white">
                {campuses[1].name}
              </h3>
            </div>
          </div>

          {/* Kalwara - Bottom Left */}
          <div className="col-span-4 relative bg-[#e3e3e3] overflow-hidden">
            <img 
              src={campuses[2].image} 
              alt={campuses[2].name}
              className="w-full h-[317px] object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-[92px] left-[30px]">
              <h3 className="text-[25px] font-semibold leading-[38px] capitalize text-white">
                {campuses[2].name}
              </h3>
            </div>
          </div>

          {/* Vaishali Nagar - Bottom Center */}
          <div 
            className="col-span-4 relative bg-gradient-to-b from-transparent to-black transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${campuses[3].backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute bottom-[89px] left-[31px]">
              <h3 className="text-[25px] font-semibold leading-[38px] capitalize text-white">
                {campuses[3].name}
              </h3>
            </div>
          </div>

          {/* Ajmer - Bottom Right */}
          <div className="col-span-4 relative bg-[#e3e3e3] overflow-hidden">
            <img 
              src={campuses[4].image} 
              alt={campuses[4].name}
              className="w-full h-[317px] object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-[88px] left-[32px]">
              <h3 className="text-[25px] font-semibold leading-[38px] capitalize text-white">
                {campuses[4].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
