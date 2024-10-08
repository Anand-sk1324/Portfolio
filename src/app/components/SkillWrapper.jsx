import { IconContext } from "react-icons";
import React, { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
const SkillWrapper = ({
  skillName = "",
  children: skillIcon,
  color = "white",
}) => {
  const [width] = useWindowSize();
  const size = width < 768 ? "40px" : "60px";
  return (
    <span className="min-w-16 flex flex-col items-center justify-center  relative group">
      <IconContext.Provider value={{ size, color }}>
        <span className=" relative group-hover:-translate-y-2 transition-transform">
          {skillIcon}
        </span>
      </IconContext.Provider>
      <span className="absolute opacity-0 bottom-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-0 transition-all">
        {skillName}
      </span>
    </span>
  );
};

export default SkillWrapper;
