import React from "react";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <div className=" fixed w-full top-0 backdrop-blur-lg bg-slate-950/80 z-50 ">
      <div className="flex justify-between p-4 items-baseline md:mx-auto md:max-w-screen-md xl:max-w-screen-lg ">
        <Logo />
        <div className="flex text-sm gap-4 md:gap-12 uppercase">
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="text-2xl md:text-3xl lg:text-4xl font-podkova font-extrabold text-text">
      KA.
    </div>
  );
};

export default Nav;
