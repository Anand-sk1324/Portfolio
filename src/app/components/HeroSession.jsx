import React from "react";
import SessionContainer from "./SessionContainer";
import Link from "./Link";

const HeroSession = () => {
  return (
    <SessionContainer
      id="hero"
      className=" h-screen sticky top-0 flex justify-center items-center overflow-hidden py-10"
      isHome
    >
      <div className=" flex flex-col items-center justify-center h-full relative z-20 ">
        <span className="mt-10 md:mb-4 font-semibold">Hi I&apos;m</span>
        <span className="text-white text-2xl md:text-5xl font-semibold md:font-bold">
          Karthick Anandan
        </span>
        <span className="my-4 md:my-8 tracking-wider">
          Mern Stack Developer
        </span>
        <p className=" text-center max-w-80 md:max-w-96 px-2">
          A passionate and dedicated Full-Stack Developer specializing in the
          MERN stack and looking for my first job.
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 mt-4 md:mt-8">
          <Link type="secondary" href="/Portfolio/Resume.pdf" download>
            Get My CV
          </Link>
          <Link type="primary" href="mailto:anand.sk1324@gmail">
            Contact Me
          </Link>
        </div>
      </div>
      <HeroBg />
    </SessionContainer>
  );
};
const HeroBg = () => {
  return (
    <div className="absolute">
      <Bg className="">
        <Bg className="md:h-screen">
          <Bg className="min-h-72"></Bg>
        </Bg>
      </Bg>
    </div>
  );
};

const Bg = ({ className = "", children }) => {
  return (
    <div
      className={
        "bg-slate-800/10 shadow-sm shadow-slate-200/10 rounded-full p-16 md:p-24  aspect-square  " +
        className
      }
    >
      {children}
    </div>
  );
};

export default HeroSession;
