"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import image33 from './image/image33.svg';
import XTREAMLY from './image/XTREAMLY.svg';
import { FaDiscord, FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const footerLinks = ["Home", "Bot Trading", "API", "Docs"];

const socialIcons = [
  { icon: FaTelegramPlane },
  { icon: FaLinkedinIn },
  { icon: FaFacebookF },
  { icon: FaDiscord },
];

const Footer = () => {

  return (
    <section className="relative w-full h-[506px] bg-[#0D0D0F] overflow-hidden">

      <svg className='pt-[158px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3  pointer-events-none' viewBox="0 0 1065 506" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_396_133)">
          <ellipse cx="532.051" cy="511.188" rx="73.7813" ry="146.188" fill="url(#paint0_linear_396_133)" />
        </g>
        <defs>
          <filter id="filter0_f_396_133" x="9.15527e-05" y="-93.2692" width="1064.1" height="1208.91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="229.135" result="effect1_foregroundBlur_396_133" />
          </filter>
          <linearGradient id="paint0_linear_396_133" x1="532.051" y1="365" x2="532.051" y2="657.376" gradientUnits="userSpaceOnUse">
            <stop stop-color="#51F1E6" />
            <stop offset="1" stop-color="#39B1A9" />
          </linearGradient>
        </defs>
      </svg>

      {/* TOP ROW */}
      <div className="max-w-[1233px] mx-auto pt-[84px] px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image src={image33} alt="logo" width={118} height={48} />
        </div>


        {/* Footer Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              className="text-white font-medium text-[16px] md:text-[18px] leading-[100%] hover:text-cyan-300 transition cursor-pointer"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white text-xl">
          {socialIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Icon
                key={index}
                className="w-5 h-5 cursor-pointer hover:text-cyan-300 transition"
              />
            );
          })}
        </div>
      </div>

      {/* HUGE BACKGROUND TEXT */}
      <div className="absolute bottom-0 left-0 w-full h-[250px]">
        <Image
          src={XTREAMLY}
          alt="logo-bg"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Footer;