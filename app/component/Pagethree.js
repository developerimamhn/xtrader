'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import image48 from './image/image48.svg';
import image40 from './image/image40.svg';
import group17 from './image/group17.svg';
import Ethereum from './image/Ethereum.svg';
import lite from './image/lite.svg';
import { FaCaretDown, FaSortUp } from 'react-icons/fa';
import { useState } from 'react';

const Pagethree = () => {
  const [active, setActive] = useState("trading");

  return (
    <div className="relative w-full h-screen bg-[#0D0D0F]">
      {/* Background Image */}
      <Image
        src={image48}
        alt="logo"
        fill
        className="object-cover"
      />

      {/* Text Over Image */}
      <div className="absolute inset-0 top-[140px]">
        <div>
          <h1 className="text-white font-bold text-[32px] md:text-[48px] leading-[130%] tracking-[0%] text-center align-middle">
            From Ai Signals To Automated <br className="hidden md:block" /> Trading - All In One Place
          </h1>
          <p className="text-white font-medium text-[14px] md:text-[16px] leading-[150%] tracking-[0%] text-center align-middle mt-4">
            Whether you want a ready-to-go AI Trading bot or powerful AI API{" "}
            <br className="hidden md:block" /> to build your own tools-we’ve got you covered.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <div
            onClick={() => setActive("trading")}
            className={`bg-white/5 backdrop-blur-xs px-9.5 py-3.5 opacity-100 rounded-[100px] border flex justify-center cursor-pointer hover:border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300
          ${active === "trading"
                ? "bg-white/10 border border-[#51F1E6] "
                : "border-white/20"
              }`}>
            <button className="text-white cursor-pointer">Read the Docs</button>
          </div>
          <div
            onClick={() => setActive("soon")}
            className={`flex justify-center px-9.5 py-3.5 opacity-100 bg-white/5 backdrop-blur-xs rounded-[100px] border cursor-pointer hover:border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300
          ${active === "soon"
                ? "bg-white/10 border border-[#51F1E6]"
                : "border-white/20"
              }`}>
            <button className="text-[#FAFAFA] cursor-pointer">See Our Pricing</button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-16 px-4">
          <div className="relative w-full max-w-[860px] h-[411px] rounded-[30px] border-2 border-[#FFFFFF1A] overflow-hidden">

            {/* Background image */}
            <Image
              src={image40}
              alt="logo"
              fill
              className="object-cover object-center "
            />

            {/* Inner Glass Card */}
            <div className="bg-[#FFFFFF0A] backdrop-blur-[50px] w-full max-w-[760px] absolute top-[50px] left-1/2 -translate-x-1/2 rounded-[30px] border border-[#FFFFFF1F] p-6 opacity-100">

              <div>
                {/* Header Row */}
                <ul className="bg-[#252429] backdrop-blur-[380px] w-full h-11 rounded-2xl flex items-center justify-between px-2 md:px-6">

                  {["coin", "Price", "Change", "Volume (24h)"].map((item, index) => (
                    <li
                      key={index}
                      className="text-white font-normal text-[12px] md:text-[14px] leading-[100%] tracking-[0%] uppercase"
                    >
                      {item}
                    </li>
                  ))}

                </ul>
              </div>

              <div>
                <ul className="bg-[#FFFFFF0D] backdrop-blur-[380px] w-full py-3 opacity-100 rounded-2xl border border-[#FFFFFF3B] flex items-center justify-between px-2 md:px-6 mt-2">
                  <li className="flex w-10 h-10 gap-3">
                    <Image
                      src={group17}
                      alt="logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[#FAFAFA] font-semibold text-[16px] md:text-[18px] tracking-[0%]">
                        BTC
                      </span>
                      <span className="text-[#CDCEED] font-normal text-[12px] md:text-[14px] tracking-[0%]">
                        Bitcoin
                      </span>
                    </div>
                  </li>
                  <li className="text-[#FAFAFA] font-medium text-[14px] md:text-[16px] tracking-[0%]">
                    $6750
                  </li>
                  <li className="flex items-center gap-2 text-[#8FFFBE] font-normal text-[14px] md:text-[16px] tracking-[0%]">
                    <span className="bg-[#8FFFBE]/10 rounded-full w-4 h-4 flex items-center justify-center">
                      <FaSortUp className="w-3 h-3 flex items-center justify-center mt-0.5" />
                    </span>
                    +7.3%
                  </li>
                  <li className="text-[#FAFAFA] font-medium text-[14px] md:text-[16px] tracking-[0%]">
                    $3420214
                  </li>
                </ul>
              </div>

              <div>
                <ul className="bg-[#FFFFFF0D] backdrop-blur-[380px] w-full py-3 opacity-100 rounded-2xl border border-[#FFFFFF3B] flex items-center justify-between px-2 md:px-6 mt-2">
                  <li className="flex w-10 h-10 gap-3">
                    <Image
                      src={Ethereum}
                      alt="logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[#FAFAFA] font-semibold text-[16px] md:text-[18px] tracking-[0%]">
                        ETH
                      </span>
                      <span className="text-[#CDCEED] font-normal text-[12px] md:text-[14px] tracking-[0%]">
                        Ethereum
                      </span>
                    </div>
                  </li>
                  <li className="text-[#FAFAFA] font-medium text-[14px] md:text-[16px] tracking-[0%]">
                    $156.83
                  </li>
                  <li className="flex items-center gap-2 text-[#FF7676] font-normal text-[14px] md:text-[16px] tracking-[0%]">
                    <span className="bg-[#FF7676]/10 rounded-full w-4 h-4 flex items-center justify-center">
                      <FaCaretDown className="w-3 h-3 flex items-center justify-center" />
                    </span>
                    -0.9%
                  </li>
                  <li className="text-[#FAFAFA] font-medium text-[14px] md:text-[16px] tracking-[0%]">
                    $1812350
                  </li>
                </ul>
              </div>

              <div>
                <ul className="bg-[#FFFFFF0D] backdrop-blur-[380px] w-full py-3 opacity-100 rounded-2xl border border-[#FFFFFF3B] flex items-center justify-between px-2 md:px-6 mt-2">
                  <li className="flex w-10 h-10 gap-3">
                    <Image
                      src={lite}
                      alt="logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[#FAFAFA] font-semibold text-[16px] md:text-[18px] tracking-[0%]">
                        Solana
                      </span>
                      <span className="text-[#CDCEED] font-normal text-[12px] md:text-[14px]o tracking-[0%]">
                        Litecoin
                      </span>
                    </div>
                  </li>
                  <li className="text-[#FAFAFA] font-medium text-[14px] md:text-[16px] tracking-[0%]">
                    $8535
                  </li>
                  <li className="flex items-center gap-2 text-[#8FFFBE] font-normal text-[14px] md:text-[16px] tracking-[0%]">
                    <span className="bg-[#8FFFBE]/10 rounded-full w-4 h-4 flex items-center justify-center">
                      <FaSortUp className="w-3 h-3 flex items-center justify-center mt-0.5" />
                    </span>
                    +8.2%
                  </li>
                  <li className="text-[#FAFAFA] font-medium text-[14px] md:text-[16px] tracking-[0%]">
                    $5820399
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagethree;