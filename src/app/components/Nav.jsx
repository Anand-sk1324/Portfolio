import React from "react";

const Nav = () => {
  return (
    <div className=" fixed w-full top-0 backdrop-blur-lg bg-slate-950/80 z-50 ">
      <div className="flex justify-between p-4 items-baseline">
        <Logo />
        <ul className="flex text-sm gap-2 uppercase">
          <li className="hover:text-text transition-colors">
            <a href="#Skills">Skills</a>
          </li>
          <li className="hover:text-text transition-colors">
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-text transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="text-2xl font-podkova font-extrabold text-text">KA.</div>
  );
};

export default Nav;
