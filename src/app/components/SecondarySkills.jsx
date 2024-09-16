"use client";
import React from "react";
import SkillWrapper from "./SkillWrapper";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiAstro } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import SessionHeading from "./SessionHeading";
import { IoLogoFigma } from "react-icons/io5";

const SecondarySkills = () => {
  const SIZE = "40px";
  return (
    <div>
      <SessionHeading>And Everthing Else</SessionHeading>
      <div className="flex gap-4 overflow-hidden h-16">
        <SkillWrapper skillName="HTML5" color="#e54d26" size={SIZE}>
          <DiHtml5 />
        </SkillWrapper>
        <SkillWrapper skillName="CSS3" color="#1572b7" size={SIZE}>
          <DiCss3 />
        </SkillWrapper>
        <SkillWrapper skillName="Javascript" color="#f0db4e" size={SIZE}>
          <DiJavascript1 />
        </SkillWrapper>

        <SkillWrapper skillName="NextJs" color="white" size={SIZE}>
          <RiNextjsFill />
        </SkillWrapper>
        <SkillWrapper skillName="Astro" color="#fe5d02" size={SIZE}>
          <SiAstro />
        </SkillWrapper>
        <SkillWrapper skillName="Vite" color="#ffdd35" size={SIZE}>
          <SiVite />
        </SkillWrapper>

        <SkillWrapper skillName="Git" color="#f34f29" size={SIZE}>
          <FaGitAlt />
        </SkillWrapper>
        <SkillWrapper skillName="GitHub" color="white" size={SIZE}>
          <FaGithub />
        </SkillWrapper>

        <SkillWrapper skillName="Jest" color="#98425b" size={SIZE}>
          <SiJest />
        </SkillWrapper>
        <SkillWrapper skillName="Cypress" color="white" size={SIZE}>
          <SiCypress />
        </SkillWrapper>
        <SkillWrapper skillName="Cypress" color="#f34e1e" size={SIZE}>
          <IoLogoFigma />
        </SkillWrapper>
      </div>
    </div>
  );
};

export default SecondarySkills;
