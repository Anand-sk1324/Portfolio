import { twMerge } from "tailwind-merge";
const Link = ({ type = "secondary", href = "#", children }) => {
  let className =
    "px-5 py-3 md:px-8 md:py-5 font-bold rounded-lg  trasnsition-all ";
  if (type == "primary") {
    className = twMerge(
      className,
      "special-bg  text-slate-800 w-fit h-fit bg-slate-200 hover:bg-slate-100 "
    );
  } else if (type == "secondary") {
    className = twMerge(
      className,
      " text-slate-400 border border-slate-400 hover:border-slate-100 hover:text-slate-100 hover:bg-slate-800  transition-all w-fit h-fit"
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
