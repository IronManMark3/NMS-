import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black">
      <div className="max-w-[1440px] mx-auto px-[72px] py-[76px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/images/img_image_1.png" alt="Neerja Modi School Logo" className="w-[66px] h-[83px] mr-4" />
              <h3 className="text-[31px] text-black leading-[38px]">Neerja Modi School</h3>
            </div>
            <p className="text-[16px] text-black leading-[26px] mb-8">
              We, at Neerja Modi World School, are focused on providing a fertile platform powered by the best-in-class education, facilities and nurturing for students to attain their highest potential.
            </p>

            {/* Follow Us */}
            <div className="mb-6">
              <h4 className="text-[20px] font-semibold text-black leading-[30px] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: "img_symbol.png", href: "https://www.facebook.com/nmsjaipur/" },
                  { icon: "img_symbol_22x14.png", href: "https://www.instagram.com/nmsjaipur/?hl=en" },
                  { icon: "img_symbol_21x14.png", href: "https://x.com/NMS_MCS" },
                  { icon: "img_symbol_21x13.png", href: "https://www.linkedin.com/company/neerjamodi-school/?originalSubdomain=in" },
                  { icon: "img_symbol_whatsapp.png", href: "https://wa.me/918905551586" }, // ✅ Add your number
                ].map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[36px] h-[36px] bg-[#f4f4f4] rounded-full flex items-center justify-center hover:shadow-md transition"
                  >
                    <img
                      src={`/images/${icon}`}
                      alt="Social Media"
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-[20px] font-semibold text-black leading-[31px] mb-6 capitalize">Explore</h4>
            <ul className="space-y-4">
              {["Blogs", "Sports", "Infrastructure", "Carrer with us", "Community Service", "Privacy Policy"].map((label, i) => (
                <li key={i}>
                  <Link to={`/${label.toLowerCase().replace(/ /g, '')}`} className="text-[16px] text-black leading-[24px] hover:text-[#c30015] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Section */}
          <div>
            <h4 className="text-[20px] font-semibold text-black leading-[31px] mb-6 capitalize">Academics</h4>
            <ul className="space-y-4">
              {["Kindergarten", "Primary School", "Middle School", "Senior School", "IGCSE", "IB"].map((label, i) => (
                <li key={i}>
                  <Link to={`/${label.toLowerCase().replace(/ /g, '')}`} className="text-[16px] text-black leading-[24px] hover:text-[#c30015] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="text-[20px] font-semibold text-black leading-[31px] mb-6 capitalize">Address</h4>
            <p className="text-[16px] text-black leading-[34px]">
              Neerja Modi School, Shipra Path, Mansarovar, Jaipur 302020 Rajasthan, INDIA.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="text-[16px] text-black leading-[24px]">
            © 2025 Neerja Modi School. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
