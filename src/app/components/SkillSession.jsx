import React from "react";
import SessionContainer from "./SessionContainer";
import PrimarySkills from "./PrimarySkills";
import SecondarySkills from "./SecondarySkills";

const SkillSession = () => {
  return (
    <SessionContainer>
      <PrimarySkills />
      <SecondarySkills />
    </SessionContainer>
  );
};

export default SkillSession;
