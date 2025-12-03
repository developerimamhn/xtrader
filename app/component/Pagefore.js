'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import image49 from './image/image49.svg';

const Pageone = () => {

  return (
    <section className="relative w-full h-[544px] bg-[#0D0D0F]">
      <Image
        src={image49}
        alt="logo"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 top-[140px]">
        <div>
          <h1 className="text-white font-semibold text-[48px] leading-[120%] tracking-[0%] text-center">
            Start Your Trading <br className="hidden md:block" /> Journey Today
          </h1>
          <p className="text-white font-normal text-[16px] leading-[150%] tracking-[0%] text-center mt-4">
            Discover how our automated system can transform your trading{" "}
            <br className="hidden md:block" /> experience effortlessly and
            efficiently
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 cursor-pointer">
          <div className="flex justify-center bg-white/10 px-9 py-3.5 opacity-100 rounded-[100px] border border-[#51F1E6] hover:bg-[#FFFFFF15] hover:shadow-[0_0_20px_#51F1E655] hover:scale-[1.03] transition-all duration-300">
            <button className="text-white font-semibold text-[16px] leading-[140%] tracking-[0%] cursor-pointer">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pageone;