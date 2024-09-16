const Link = ({ type = "secondary", href = "#", children }) => {
  if (type == "primary") {
    return (
      <PrimaryLink>
        <BaseLink href={href}>{children}</BaseLink>
      </PrimaryLink>
    );
  } else {
    return (
      <SecondaryLink>
        <BaseLink href={href}>{children}</BaseLink>
      </SecondaryLink>
    );
  }
};
const BaseLink = ({ children, href }) => {
  return (
    <div className="px-5 py-3 md:px-8 md:py-5 font-bold">
      <a href={href} className="">
        {children}
      </a>
    </div>
  );
};
const PrimaryLink = ({ children }) => {
  return (
    <div className="special-bg rounded-lg text-slate-800 w-fit h-fit ">
      {children}
    </div>
  );
};
const SecondaryLink = ({ children }) => {
  return (
    <div className=" text-slate-400 border border-slate-400 rounded-lg w-fit h-fit">
      {children}
    </div>
  );
};

export default Link;
