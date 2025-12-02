'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import stats_image from './image/stats_image.svg';

const Pageone = () => {

  return (
    <section className="relative w-full h-[829px] overflow-hidden">
      {/* Background swirl */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <Image
          src={stats_image}
          alt="logo"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 pt-20 md:pt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
        {/* Left Title */}

        <div className="">
          <h1 className="text-[#FAFAFA] font-bold text-3xl md:text-[48px] leading-[130%] tracking-[0%] align-middle">
            Perps Specialist, Not a <br className="hidden md:block" /> Multipurpose Bot.
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-10 p-0 lg:mt-6">
          {/* Item 1 */}
          <div>
            <div className="relative w-full md:w-[600px] h-0.5 bg-linear-to-r from-transparent to-white">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
            </div>
            <div className="mt-10 w-[600px] h-[111px] opacity-100 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-2xl md:text-[32px] leading-[35px] tracking-[0%] align-middle">
                Compound, Don’t Gamble
              </h3>
              <p className="text-white text-base md:text-[20px] leading-[150%] tracking-[0%] align-middle">
                AI predicts moves on blue-chip tokens and manages long/ <br /> shorts
                for steady compounding
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div>
            <div className="relative w-full md:w-[600px] h-0.5 bg-linear-to-l from-transparent to-white">
              <div className="w-3 h-3 bg-white rounded-full absolute left-0 top-1/2 -translate-y-1/2"></div>
            </div>
            <div className="mt-10 w-[600px] h-[111px] opacity-100 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-2xl md:text-[32px] leading-[35px] tracking-[0%] align-middle">
                Institutional Execution, Self-Custody
              </h3>
              <p className="text-white text-base md:text-[20px] leading-[150%] tracking-[0%] align-middle">
                Keep your keys, stay transparent, enjoy <br /> pro-grade execution
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div>
            <div className="relative w-full md:w-[600px] h-0.5 bg-linear-to-r from-transparent to-white">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
            </div>
            <div className="mt-10 w-[600px] h-[111px] opacity-100 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-2xl md:text-[32px] leading-[35px] tracking-[0%] align-middle">
                Intelligence That Grows with You
              </h3>
              <p className="text-white text-base md:text-[20px] leading-[150%] tracking-[0%] align-middle">
                The more you trade, the smarter the models, the <br /> more your
                returns compound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pageone;