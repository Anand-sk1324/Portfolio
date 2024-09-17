import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <div className="flex justify-between md:max-w-screen-md xl:max-w-screen-lg  mx-auto">
      <span className="hidden md:block">Want to Learn More?</span>
      <ul className="flex gap-6 mx-auto md:mx-0  w-fit">
        <Contact
          href="https://www.instagram.com/Karthick._.anandan"
          title="Instagram"
        ></Contact>
        <Contact
          href="https://www.linkedin.com/in/karthick-anandan"
          title="Linkedln"
        ></Contact>
        <Contact
          href="https://github.com/Anand-sk1324"
          title="GitHub"
        ></Contact>
      </ul>
    </div>
  );
};

const Contact = ({ title, href }) => {
  return (
    <NavLink href={href}>
      <div className="flex items-center gap-1 ">
        <span>{title}</span>
        <CgArrowTopRight />
      </div>
    </NavLink>
  );
};

export default Footer;
