import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <span className="hidden md:block">Want to Learn More?</span>
      <ul className="flex gap-6 mx-auto  w-fit">
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
    <l1 className="flex items-center gap-1 hover:text-slate-50 transition-colors">
      <a href={href} target="_blank">
        {title}
      </a>
      <CgArrowTopRight />
    </l1>
  );
};

export default Footer;
