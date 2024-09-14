import { IconContext } from "react-icons";
const SkillWrapper = ({
  skillName = "",
  children: skillIcon,
  color = "white",
  size = "20px",
}) => {
  return (
    <span className="w-20">
      <IconContext.Provider value={{ size, color }}>
        <span>{skillIcon}</span>
      </IconContext.Provider>
      {skillName}
    </span>
  );
};

export default SkillWrapper;
