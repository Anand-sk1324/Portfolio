import React from "react";
import SessionContainer from "./SessionContainer";
import PrimarySkills from "./PrimarySkills";
import SecondarySkills from "./SecondarySkills";

const SkillSession = () => {
  return (
    <>
      <SessionContainer id="Skills">
        <PrimarySkills />
      </SessionContainer>
      <SessionContainer>
        <SecondarySkills />
      </SessionContainer>
    </>
  );
};

export default SkillSession;
