'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import image47 from './image/image47.svg';
import { useState } from 'react';

const Pagetwo = () => {
  const [activeCard, setActiveCard] = useState("first");
  const [active, setActive] = useState("trading");

  return (
    <div className="relative w-full h-[1027px] bg-[#0D0D0F]">
      {/* Background Image */}
      <Image
        src={image47}
        alt="logo"
        fill
        className="object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0">
        {/* Title */}
        <div className="pt-4 md:pt-20 px-4">
          <h1 className="text-white font-bold text-[32px] md:text-[48px] leading-[130%] tracking-[0%] text-center align-middle">
            Choose Your Plan
          </h1>
          <p className="md:pt-4 text-white font-medium text-[14px] md:text-[16px] leading-[150%] tracking-[0%] text-center align-middle">
            Choose a plan that fits your needs.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center pt-4 md:pt-14 px-4">
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-[100px] p-2 flex items-center justify-between hover:border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] transition-all duration-300">

            {/* Left Button — Trading Bot */}
            <div
              onClick={() => setActive("trading")}
              className={`px-9 py-3.5 rounded-[100px] flex items-center justify-center cursor-pointer
            ${active === "trading"
                  ? "bg-[#FFFFFF1A] border border-[#51F1E6]"
                  : ""
                }`}
            >
              <button className="text-white font-semibold text-[14px] md:text-[16px] leading-[140%] cursor-pointer">
                Trading Bot
              </button>
            </div>

            {/* Right Button — Coming Soon */}
            <div
              onClick={() => setActive("soon")}
              className={`px-9 py-3.5 rounded-[100px] flex items-center justify-center cursor-pointer
            ${active === "soon"
                  ? "bg-[#FFFFFF1A] border border-[#51F1E6]"
                  : ""
                }`}
            >
              <button className="text-white font-semibold text-[14px] md:text-[16px] leading-[140%] cursor-pointer">
                Coming Soon
              </button>
            </div>

          </div>
        </div>

        {/* Header Card */}
        <div className="flex items-center justify-center pt-4 md:pt-6 px-3 cursor-pointer">
          <div className={`flex items-center bg-[#FFFFFF08] w-full max-w-[1056px] py-3 md:py-6 rounded-[20px] px-6 md:px-10 hover:scale-[1.03] hover:shadow-[0_0_25px_#51F1E655] transition-all duration-300
            ${activeCard === "first" ? "border-2 border-[#51F1E6]" : "border border-[#FFFFFF29]"}`}>
            <div className="grid grid-cols-[90px_180px_1fr] md:grid-cols-[180px_260px_1fr]">
              <p className="text-white font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[0%] align-middle uppercase">
                Tier
              </p>
              <p className="text-white font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[0%] align-middle uppercase">
                Price/month
              </p>
              <p className="text-white font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[0%] align-middle uppercase">
                Key benefits
              </p>
            </div>
          </div>
        </div>

        {/* Starter Card */}
        <div className="flex items-center justify-center pt-4 px-3 cursor-pointer"
          onMouseEnter={() => setActiveCard("starter")}
          onMouseLeave={() => setActiveCard("first")}>
          <div className={`md:grid md:grid-cols-[180px_260px_1fr] flex flex-col items-start md:items-center bg-[#FFFFFF08] w-full max-w-[1056px]  rounded-[20px] p-3 md:p-6 md:px-10 hover:scale-[1.03] hover:shadow-[0_0_25px_#51F1E655] transition-all duration-300
            ${activeCard === "starter" ? "border-2 border-[#51F1E6]" : "border border-[#FFFFFF29]"}`}>
            <button className="text-white text-center w-[113px] h-[37px] opacity-100 rounded-[80px] border border-[#FFFFFF3D] uppercase bg-[radial-gradient(130%_130%_at_50%_50%,rgba(255,255,255,0)_25%,#FFFFFF_100%)]">
              Starter
            </button>
            <h1 className="pt-4 md:pt-0 text-white font-bold text-[36px] md:text-[48px] leading-[100%] tracking-[0%] align-middle">
              $79
            </h1>
            <p className="pt-3 md:pt-0 text-white font-medium text-[16px] md:text-[19px] leading-[150%] tracking-[0%] align-middle">
              Al-powered trading for beginners. Fully{" "}
              <br className="hidden md:block" /> automated, safe, and simple.
              Single chain, <br className="hidden md:block" /> Trading
              Ethereum, Bitcoin,
            </p>
          </div>
        </div>

        {/* Pro Card */}
        <div className="flex items-center justify-center pt-4 px-3 cursor-pointer"
          onMouseEnter={() => setActiveCard("pro")}
          onMouseLeave={() => setActiveCard("first")}>
          <div className={`md:grid md:grid-cols-[180px_260px_1fr] flex flex-col items-start md:items-center bg-[#FFFFFF08] w-full max-w-[1056px] opacity-100 rounded-[20px] p-3 md:p-6 md:px-10 hover:scale-[1.03] hover:shadow-[0_0_25px_#51F1E655] transition-all duration-300
            ${activeCard === "pro" ? "border-2 border-[#51F1E6]" : "border border-[#FFFFFF29]"}`}>
            <button className="text-white w-[77px] h-[37px] top-[49px] opacity-100 rounded-[80px] border border-[#FFFFFF3D] uppercase bg-[radial-gradient(130%_130%_at_50%_50%,rgba(255,255,255,0)_25%,#FFFFFF_100%)]">
              Pro
            </button>
            <h1 className="pt-4 md:pt-0 text-white font-bold text-[36px] md:text-[48px] leading-[100%] tracking-[0%] align-middle">
              $149
            </h1>
            <p className="pt-3 md:pt-0 text-white font-medium text-[16px] md:text-[19px] leading-[150%] tracking-[0%] align-middle">
              Starter Packet, multi-chain,{" "}
              <span className="font-bold text-[19px] leading-[150%] tracking-[0%] align-middle text-[#51F1E6]">
                BTC cashback 2%,
              </span>{" "}
              <br className="hidden md:block" /> priority support.
            </p>
          </div>
        </div>

        {/* Elite Card */}
        <div className="flex items-center justify-center pt-4 px-3 cursor-pointer"
          onMouseEnter={() => setActiveCard("elite")}
          onMouseLeave={() => setActiveCard("first")}>
          <div className={`md:grid md:grid-cols-[180px_260px_1fr] flex flex-col items-start md:items-center bg-[#FFFFFF08] w-full max-w-[1056px] opacity-100 rounded-[20px] p-3 md:p-6 md:px-10 hover:scale-[1.03] hover:shadow-[0_0_25px_#51F1E655] transition-all duration-300
            ${activeCard === "elite" ? "border-2 border-[#51F1E6]" : "border border-[#FFFFFF29]"}`}>
            <button className="text-white w-[85px] h-[37px] opacity-100 rounded-[80px] border border-[#FFFFFF3D] uppercase bg-[radial-gradient(130%_130%_at_50%_50%,rgba(255,255,255,0)_25%,#FFFFFF_100%)]">
              Elite
            </button>
            <h1 className="pt-4 md:pt-0 text-white font-bold text-[36px] md:text-[48px] leading-[100%] tracking-[0%] align-middle">
              $199
            </h1>
            <p className="pt-3 md:pt-0 text-white font-medium text-[16px] md:text-[19px] leading-[150%] tracking-[0%] align-middle">
              Pro Packet +{" "}
              <span className="font-bold text-[19px] leading-[150%] tracking-[0%] align-middle text-[#51F1E6]">
                BTC cashback 4%,
              </span>{" "}
              full annual report <br className="hidden md:block" /> and
              partner reward programs
            </p>
          </div>
        </div>

        {/* button */}
        <div className=" flex items-center justify-center mt-6 md:mt-10">
          <div className="flex items-center justify-center px-8.5 py-3.5 opacity-100 rounded-[100px] bg-white/10 border border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
            <button className="text-white font-semibold text-[16px] leading-[140%] tracking-[0] cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagetwo;