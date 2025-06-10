import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 w-full h-[68px] bg-gradient-to-r from-[#c30015] to-[#0025ae] flex items-center px-3 z-[50]">
  <div className="bg-white rounded px-4 py-3 flex items-center mr-auto">
    <img src="/images/img_icon_frame.png" alt="Phone" className="w-[23px] h-[23px] mr-3" />
    <span className="text-[16px] text-black">+91-141-2785484</span>
  </div>
  <div className="group rounded px-4 py-3 bg-white hover:bg-gradient-to-r from-[#c30015] to-[#0025ae] transition-all duration-300">
    <span className="text-[13px] font-roboto bg-gradient-to-r from-[#c30015] to-[#0025ae] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
      Online Fee Pay
    </span>
  </div>
</div>


      {/* Main Navigation */}
      <header className="fixed top-[68px] left-0 w-full h-[86px] bg-white flex items-center px-11 shadow-sm z-[50]">
        <div className="flex items-center">
          <img src="/images/img_image_1.png" alt="Neerja Modi School Logo" className="w-[43px] h-[54px] mr-4" />
          <h1 className="text-[24px] text-black">Neerja Modi School</h1>
        </div>

        <nav className="hidden lg:flex items-center ml-auto space-x-8">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/admission", label: "Admission" },
            { to: "/academics", label: "Academics" },
            { to: "/activities", label: "Activities" },
            { to: "/notices", label: "Notices" },
            { to: "/alumni", label: "Alumni" },
            { to: "/blogs", label: "Blogs" },
            { to: "/contact", label: "Contact us" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-[16px] text-black hover:text-[#c30015] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden ml-auto p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block w-full h-0.5 bg-black"></span>
            <span className="block w-full h-0.5 bg-black"></span>
            <span className="block w-full h-0.5 bg-black"></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[154px] left-0 w-full bg-white shadow-lg lg:hidden z-50">
            <nav className="flex flex-col p-4 space-y-4">
              {[
                "Home",
                "About Us",
                "Admission",
                "Academics",
                "Activities",
                "Notices",
                "Alumni",
                "Blogs",
                "Contact us",
              ].map((label, i) => (
                <Link
                  key={i}
                  to="/"
                  className="text-[16px] text-black hover:text-[#c30015] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
