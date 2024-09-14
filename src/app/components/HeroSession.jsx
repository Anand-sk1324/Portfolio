import React from "react";
import SessionContainer from "./SessionContainer";
import Link from "./Link";

const HeroSession = () => {
  return (
    <SessionContainer id="hero">
      <HeroWrapper>
        <span>Hi I&apos;m</span>
        <span>Karthick Anandan</span>
        <span>Mern Stack Developer</span>
        <span>
          a passionate and dedicated Full-Stack Developer specializing in the
          MERN stack and looking for my first job.
        </span>
        <Link type="secondary" href="/Portfolio/Resume.pdf" download>
          My Resume
        </Link>
        <Link type="primary" href="mailto:anand.sk1324@gmail">
          Contact Me
        </Link>
      </HeroWrapper>
    </SessionContainer>
  );
};
const HeroWrapper = ({ children }) => {
  return <div>{children}</div>;
};

export default HeroSession;
