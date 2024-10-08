import React from "react";
import SessionContainer from "./SessionContainer";
import PrimarySkills from "./PrimarySkills";
import SecondarySkills from "./SecondarySkills";

const SkillSession = () => {
  return (
    <>
      <SessionContainer id="Skills" className="bg-slate-950">
        <div className="space-y-12 ">
          <PrimarySkills />
          <SecondarySkills />
        </div>
      </SessionContainer>
    </>
  );
};

export default SkillSession;
