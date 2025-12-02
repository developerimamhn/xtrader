'use client';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import pikaso_enhance from './image/pikaso_enhance.svg';
import compnay_logo1 from './image/compnay_logo1.svg';
import compnay_logo2 from './image/compnay_logo2.svg';
import compnay_logo3 from './image/compnay_logo3.svg';
import compnay_logo4 from './image/compnay_logo4.svg';
import compnay_logo5 from './image/compnay_logo5.svg';
import compnay_logo6 from './image/compnay_logo6.svg';
import hero_logo1 from './image/hero_logo1.svg';
import hero_logo2 from './image/hero_logo2.svg';
import hero_logo3 from './image/hero_logo3.svg';
import hero_logo4 from './image/hero_logo4.svg';

const cardData = [
  { value: "$17.26", label: "Total PnL" },
  { value: "7,940", label: "Total APY" },
  { value: "10,000,00", label: "Number of Trades" },
  { value: "1.5M", label: "Position Size" },
  { value: "$17.26", label: "Liquidations" },
  { value: "7,940", label: "PnL Over Price" },
  { value: "10,000,00", label: "Volume", extraWidth: true },
];

const logos = [
  { src: compnay_logo1, width: 98.4, height: 30 },
  { src: compnay_logo2, width: 36.1, height: 28 },
  { src: compnay_logo3, width: 88, height: 30.02 },
  { src: compnay_logo4, width: 81.49, height: 19.4 },
  { src: compnay_logo5, width: 81.31, height: 26.15 },
  { src: compnay_logo6, width: 135.6, height: 30 },
];

const heroLogos = [
  { src: hero_logo1, top: "396px", left: "327.55px", blend: true },
  { src: hero_logo2, top: "260px", left: "1619.88px" },
  { src: hero_logo3, top: "900px", left: "217.55px" },
  { src: hero_logo4, top: "747px", left: "1494px" },
];

const HeroPage = () => {
  return (
    <section className="w-full h-[1219px] ">
      <div className=" z-10 overflow-hidden">
        {/* Background Image */}
        <div>
          <Image
            src={pikaso_enhance}
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-[radial-gradient(37.22%_67.21%_at_50%_10.56%,#0D0D0F_0%,rgba(13,13,15,0.3)_49.5%,#0D0D0F_100%)] absolute"></div>

        {/* <svg className="absolute inset-0 " width="1699" height="1219" viewBox="0 0 1699 1219" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_396_230)">
            <ellipse cx="849.5" cy="620" rx="349.5" ry="154" fill="#39B1A9" />
          </g>
          <defs>
            <filter id="filter0_f_396_230" x="0" y="-34" width="1699" height="1308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_396_230" />
            </filter>
          </defs>
        </svg> */}


        {/* Overlay Content */}
        <div className="relative inset-0 z-10 py-6 px-4 md:px-8">

          {/* HERO TEXT */}
          <div className="flex justify-center">
            <div className="pt-36 md:pt-40 flex items-center flex-col gap-4 md:gap-6">
              <h1 className="text-white font-bold text-3xl md:text-[62px] leading-[130%] tracking-[0%] text-center align-middle">
                Trading Isn’t the Product. <br className="hidden md:block" /> The System Is.
              </h1>
              <p className="text-white max-w-[676px] font-medium text-base md:text-[20px] text-center align-middle">
                Whether you need a ready-to-go AI trading bot or robust AI APIs <br className="hidden md:block" />
                to create your own tools, we’ve got you covered.
              </p>

              <div className="flex items-center justify-center hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300">
                <button className="text-white w-48 bg-white/10 h-[52px] opacity-100 rounded-[100px] border border-[#51F1E6] font-semibold text-[16px] leading-[140%] cursor-pointer">
                  Connect Wallet
                </button>
              </div>

              {/* CARDS GRID */}
              <div className="pt-4 md:pt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 w-full md:w-[1140px] opacity-100">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className={`bg-[#FFFFFF0F] h-[146px] opacity-100 rounded-[20px] ${card.extraWidth ? "w-full md:w-[562px]" : "w-full"
                      }`}
                  >
                    <div className="flex flex-col pt-8 pl-7.5 gap-1 opacity-100">
                      <h1 className="text-white font-semibold text-[36px] leading-[150%] align-middle">
                        {card.value}
                      </h1>
                      <p className="text-[#ABB2B5] font-medium text-[16px] leading-[150%] align-middle">
                        {card.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 md:pt-10 pb-2">
                <p className="text-[#FAFAFA] font-medium text-[16px] leading-[150%] tracking-[0%] text-center">
                  Trusted by 50,000+ trader worldwide.
                </p>
              </div>

              <div className="flex gap-8">
                {logos.map((logo, idx) => (
                  <div key={idx} className="flex items-center gap-4">

                    {/* Left vertical line */}
                    <div className="w-px h-[30px] bg-[#1D1E21]"></div>

                    {/* Logo */}
                    <Image
                      src={logo.src}
                      alt={logo.src}
                      width={logo.width}
                      height={logo.height}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ABSOLUTE DECOR IMAGES */}
        {heroLogos.map((item, idx) => (
          <div
            key={idx}
            className={`hidden lg:block absolute`}
            style={{
              top: item.top,
              left: item.left,
              mixBlendMode: item.blend ? "luminosity" : "normal",
            }}
          >
            <Image
              src={item.src}
              alt="logo"
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </section>

  );
};

export default HeroPage;