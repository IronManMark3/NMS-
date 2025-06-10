import React from 'react';
import Button from '../../components/ui/Button';

const AboutSection = () => {
  return (
    <section className="bg-white py-[131px] px-[81px] relative">
      <div className="max-w-[1277px] mx-auto">
        {/* Main Heading with Gradient */}
        <h2 className="text-[38px] leading-[46px] text-center capitalize bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[40px] max-w-[488px] mx-auto">
          Shaping Young Minds, Building Global Leaders
        </h2>

        {/* Description */}
        <p className="text-[16px] leading-[25px] text-justify text-black mb-[40px] max-w-[852px] mx-auto">
          Welcome to Neerja Modi School (NMS)—a place where education inspires, nurtures, and transforms. As one of Jaipur's top CBSE and IB school, we provide an enriching environment where students explore their potential, think critically, and grow into confident individuals. With a strong foundation in CBSE, IB, and Cambridge curriculums, we blend academic excellence with real-world skills, creativity, and leadership, preparing students to thrive on a global stage.
        </p>

        {/* Know More Button */}
        <div className="flex justify-center mb-[40px]">
          <Button
            variant="gradient"
            className="px-[38px] py-[12px] text-[14px] leading-[21px] text-center rounded-sm border border-gradient-to-r from-[#c30015] to-[#0025ae]"
          >
            Know More
          </Button>
        </div>

        {/* Image Gallery with Zoom Effect */}
        <div className="relative mb-[150px]">
          <div className="flex justify-center gap-[27px]">
            {[
              { src: "/images/img_0182.png", alt: "School Image 1" },
              { src: "/images/img_1098_74.png", alt: "School Image 2" },
              { src: "/images/img_0136.png", alt: "School Image 3" },
            ].map((image, index) => (
              <div
                key={index}
                className="rounded-xl bg-white transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-[461px] h-[307px] overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stats Panel */}
          <div
            className="absolute -bottom-[80px] left-1/2 transform -translate-x-1/2 w-full max-w-[1100px] px-[30px] py-[30px] bg-white rounded-xl shadow-lg flex flex-wrap justify-center gap-[30px] z-10"
          >
            {[
              { number: "25+", label: "Years\nof Excellence" },
              { number: "500+", label: "Crores in\nInternational Scholarships" },
              { number: "1000+", label: "National & International Toppers" },
              { number: "100+", label: "Sports &\nArts Programs" },
              { number: "250+", label: "Awards & Recognitions" },
            ].map((stat, index) => (
              <div key={index} className="flex-1 min-w-[150px] text-center">
                <h3 className="text-[38px] leading-[48px] uppercase bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent mb-[8px]">
                  {stat.number}
                </h3>
                <p className="text-[12px] leading-[17px] text-black whitespace-pre-line uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
