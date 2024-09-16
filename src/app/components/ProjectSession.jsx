"use client";
import React from "react";
import SessionHeading from "./SessionHeading";
import SessionContainer from "./SessionContainer";
import { IconContext } from "react-icons";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "./Link";
import { projectData } from "../constants";

const ProjectSession = () => {
  return (
    <SessionContainer id="Projects">
      <SessionHeading>
        Personal & Professional <span className="text-white ">Projects</span>
      </SessionHeading>
      <div className="flex flex-col gap-10">
        {projectData.map((project) => (
          <ProjectContainer
            key={project.id}
            title={project.title}
            techStack={project.techStack}
            keyPoints={project.keyPoints}
            liveDemoUrl={project.liveDemoUrl}
            sourceCodeUrl={project.sourceCodeUrl}
          />
        ))}
      </div>
    </SessionContainer>
  );
};

const ProjectContainer = ({
  title,
  techStack,
  keyPoints,
  liveDemoUrl,
  sourceCodeUrl,
}) => {
  return (
    <div className="mx-5 px-6 py-6 border border-slate-50 rounded-lg bg-slate-100/5">
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="border border-slate-100 px-5 py-1 text-slate-100 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <ProjectHeading>
        {title.map((t, i) => (
          <span key={i} className={t.style === "bright" ? "text-slate-50" : ""}>
            {t.data}{" "}
          </span>
        ))}
      </ProjectHeading>
      <div className="space-y-2 mb-6">
        {keyPoints.map((k, i) => (
          <Point key={i}>{k}</Point>
        ))}
      </div>
      <div className="flex flex-col-reverse gap-6 w-fit">
        {sourceCodeUrl && (
          <Link href={sourceCodeUrl} type="secondary">
            Source Code
          </Link>
        )}
        {liveDemoUrl && (
          <Link href={liveDemoUrl} type="primary">
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};
const ProjectHeading = ({ children }) => {
  return <div className="text-xl font-bold my-4">{children}</div>;
};
const Point = ({ children }) => {
  return (
    <div className="flex  gap-2 ">
      <div className="w-4 h-4 pt-1">
        <IconContext.Provider value={{ size: "16px" }}>
          <FaRegCheckCircle />
        </IconContext.Provider>
      </div>
      {children}
    </div>
  );
};
export default ProjectSession;
