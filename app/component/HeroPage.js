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


const HeroPage = () => {
  return (
    <section className="w-full h-screen ">
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
        {/* Overlay Content */}
        <div className="relative inset-0 z-10 py-6 px-4 md:px-8 container mx-auto">
          <div className="">
            <div className="pt-36 md:pt-40  gap-4 md:gap-6">
              <h1 className="text-white font-bold text-3xl md:text-[62px] leading-[130%] text-center relative w-full">
                <Image className="-right-[15%] top-1/2 -translate-y-[50%] absolute grayscale-100 animate-bounce" src={hero_logo2} alt="Loading..."/>
                Trading Isn’t the Product. <br className="hidden md:block" /> The System Is.
              </h1>
              <p className="text-white font-medium text-base md:text-[20px] text-center align-middle relative w-full pt-[10px] sm:pt-[11px] md:pt-[12px]">
                <Image className="left-0 top-1/2 -translate-y-[50%] absolute grayscale-100 animate-bounce" src={hero_logo1} alt="Loading..."/>

                Whether you need a ready-to-go AI trading bot or robust AI APIs <br className="hidden md:block" />
                to create your own tools, we’ve got you covered.
              </p>

              <div className="flex items-center rounded-[100px] justify-center pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]">
                <button className="text-white w-48 bg-white/10 h-[52px] opacity-100 rounded-[100px] border border-[#51F1E6] font-semibold text-[16px] leading-[140%] cursor-pointer hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300">
                  Connect Wallet
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 w-full opacity-100 relative mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[100px]">
                <Image className="-left-[12%] -bottom-[20%] absolute grayscale-100 animate-bounce" src={hero_logo3} alt="Loading..."/>
                <Image className="-right-[8%] top-1/2 -translate-y-[50%] absolute grayscale-100 animate-bounce" src={hero_logo4} alt="Loading..."/>
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className={`bg-[#FFFFFF0F] rounded-[20px] backdrop-blur-2xl w-full px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[30px] py-[14px] sm:py-[15px] md:py-[16px] lg:py-[20px] xl:py-[24px] 2xl:py-[32px]
                      ${index === cardData.length - 1 ? "col-span-2" : ""}
                    `}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 -top-px block h-full w-full  animate-gradient bg-linear-to-tl bg-[linear-gradient(339deg,#ABB2B5,#ABB2B520,#ABB2B520,#ABB2B520,#ABB2B520,#ABB2B520,#FFFFFF00,#abb2b5be,#abb2b5be,#abb2b5be,#abb2b5be,#abb2b5be,#ABB2B5)] bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract!"></div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-white font-semibold text-[36px] leading-[150%]">
                        {card.value}
                      </h1>
                      <p className="text-[#ABB2B5] font-medium text-[16px] leading-[150%]">
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
      </div>
    </section>

  );
};

export default HeroPage;