import React from "react";

const Footer = () => {
  return (
    <div>
      Want to Learn More?
      <ul>
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
    <l1>
      <a href={href} target="_blank">
        {title}
      </a>
    </l1>
  );
};

export default Footer;
