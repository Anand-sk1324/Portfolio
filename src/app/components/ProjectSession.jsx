import React from "react";
import SessionHeading from "./SessionHeading";
import SessionContainer from "./SessionContainer";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "./Link";
import { projectData } from "../constants";

const ProjectSession = () => {
  return (
    <SessionContainer>
      <SessionHeading>Personal & Professional Projects</SessionHeading>
      <div>
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
    <div>
      <div className="flex flex-wrap">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <ProjectHeading>
        {title.map((t, i) => (
          <span key={i}>{t.data} </span>
        ))}
      </ProjectHeading>
      <div>
        {keyPoints.map((k, i) => (
          <Point key={i}>{k}</Point>
        ))}
      </div>
      <div>
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
  return <div>{children}</div>;
};
const Point = ({ children }) => {
  return (
    <div>
      <FaRegCheckCircle />
      {children}
    </div>
  );
};
export default ProjectSession;
