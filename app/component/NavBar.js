"use client";

import Image from 'next/image';
import nav_logo from './image/nav_logo.svg';
import { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState("trading");

  const menuItems = ["Home", "Bot Trading", "API", "Docs"];

  return (
    <div className="relative inset-0 z-10 pt-6 px-3.5 md:px-8">
      <nav className="gap-6 md:gap-[84px] flex flex-col md:flex-row items-center justify-between md:justify-center">

        {/* Logo */}
        <div>
          <Image
            src={nav_logo}
            alt="logo"
            width={140}
            height={29}
          />
        </div>

        {/* Menu Items */}
        <div>
          <ul className="text-white w-full md:w-[436px] flex items-center justify-between border border-[#FFFFFF29] rounded-[100px] px-8 md:px-10 py-4 gap-x-4 md:gap-x-0 bg-[#FFFFFF0F] hover:border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] transition-all duration-300">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="font-medium text-sm md:text-[16px] leading-[140%] tracking-[0%] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4 md:gap-6">
          <div
            onClick={() => setActive("trading")}
            className={`bg-[#FFFFFF0D] px-8.5 py-3.5 opacity-100 rounded-[100px] border flex items-center justify-center cursor-pointer hover:border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300
            ${active === "trading"
                ? "bg-[#FFFFFF1A] border border-[#51F1E6] "
                : "border-white/20"
              }`}>
            <button className="text-[#FAFAFA] font-medium text-[16px] leading-[140%] tracking-[0%] cursor-pointer">
              Login
            </button>
          </div>
          <div
            onClick={() => setActive("soon")}
            className={`bg-[#FFFFFF0D] px-8.5 py-3.5 rounded-[100px] border flex items-center justify-center cursor-pointer hover:border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300
            ${active === "soon"
                ? "bg-white/10 border border-[#51F1E6]"
                : "border-white/20"
              }`}>
            <button className="font-semibold text-[16px] leading-[140%] tracking-[0%] backdrop-blur-sm text-white cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default NavBar;

