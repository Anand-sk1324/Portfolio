"use client";
import SkillWrapper from "./SkillWrapper";
import { IconContext } from "react-icons";
import { DiReact, DiMongodb } from "react-icons/di";
import { BiLogoTailwindCss as Tailwind } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import SessionHeading from "./SessionHeading";

const PrimarySkills = () => {
  const SIZE = "40px";
  return (
    <div>
      <SessionHeading>
        Base <span className="text-white">Tech Stack</span>
      </SessionHeading>
      <div className="flex justify-center gap-4 h-16 overflow-hidden">
        <SkillWrapper skillName="React" color="#61dbfb" size={SIZE}>
          <DiReact />
        </SkillWrapper>
        <SkillWrapper skillName="TailwindCss" color="#38bdf8" size={SIZE}>
          <Tailwind />
        </SkillWrapper>
        <SkillWrapper skillName="Express" color="white" size={SIZE}>
          <SiExpress />
        </SkillWrapper>
        <SkillWrapper skillName="MongoDb" color="#4faa41" size={SIZE}>
          <DiMongodb />
        </SkillWrapper>
      </div>
    </div>
  );
};
export default PrimarySkills;
