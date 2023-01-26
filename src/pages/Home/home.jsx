import React from "react";

export default function Home() {
  return (
    <section className="md:bg-hero-desktop 2sm:bg-hero-tablet bg-hero-mobile max-w-full bg-center bg-no-repeat bg-cover grid place-items-center md:max-h-screen max-2sm:max-h-full lg:h-screen 2sm:h-screen">
      <div className="flex lg:flex-row flex-col md:justify-between justify-between lg:items-end items-center lg:text-start text-center lg:px-0 md:mt-40 mt-24 w-[75%] gap-8">
        <div className="text-white lg:w-[40%] md:w-[70%] w-[80%]">
          <p className="font-barlow tracking-[4.72px] text-lg">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="md:text-[9rem] max-md:text-[4rem] max-sm:text-xl font-belle">SPACE</h1>
          <p className="font-barlow leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="bg-white w-[274px] h-[274px] rounded-[100%] text-[2rem] font-belle tracking-[2px]  hover:shadow-opacity-5 hover:shadow-[0px_-0px_0_65px_rgb(255,255,255,0.1)] transition-all duration-300 ease-in-out">
          EXPLORE
        </button>
      </div>
    </section>
  );
}
