import React from 'react';

const AcademicsSection = () => {
  const achievements = [
    {
      name: "Aditya Agarwal",
      university: "Cornell University, an Ivy League institute",
      scholarship: "₹2,40,00,000",
      image: "/images/img_aditya_agarwal_1.png"
    },
    {
      name: "Hitishaa Goyal",
      university: "Cornell University, an Ivy League institute", 
      scholarship: "₹2,40,00,000",
      image: "/images/img_screenshot_20250308_at_12537pm_1.png"
    },
    {
      name: "Shriya Jagwayan",
      university: "Tulane University, an Ivy League institute",
      scholarship: "₹2,51,79,985", 
      image: "/images/img_screenshot_20250308_at_13848pm_1.png"
    },
    {
      name: "Aaradhya Khandelwal",
      university: "The University of Texas at Austin",
      scholarship: "₹2,51,79,985",
      image: "/images/img_screenshot_20250308_at_14140pm_1.png"
    },
    // repeat pattern omitted for brevity
  ];

  return (
    <section className="bg-white py-[110px] px-[81px]">
      <div className="max-w-[1277px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[72px]">
        <h2 className="text-[40px] leading-[36px] text-center capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[40px]">
  <span className="text-[40px]">Exceptional Results & </span>
  <span className="text-[76px] leading-[66px]">Achievements</span>
</h2>

          <p className="text-[18px] leading-[27px] text-center capitalize text-black max-w-[688px] mx-auto">
            Guiding students to success through quality education, dedicated support, and a nurturing environment.
          </p>
        </div>

        {/* Horizontal Scrollable Achievements */}
        <div className="overflow-x-auto scroll-smooth custom-scrollbar">
          <div className="flex gap-[50px] w-max px-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col w-[252px]">
                {/* Student Image */}
                <div className="bg-gradient-to-br from-[#c30015a0] to-[#0025aea0] rounded p-[26px] mb-[17px] w-[252px] h-[245px]">
                  <img 
                    src={achievement.image}
                    alt={achievement.name}
                    className="w-[202px] h-[199px] object-cover rounded"
                  />
                </div>
                
                {/* Student Details */}
                <div className="w-[252px]">
                  <p className="text-[16px] leading-[24px] text-left capitalize text-black">
                    {achievement.name} <br /> {achievement.university} <br />
                    Scholarship : {achievement.scholarship}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
