import React from "react";

const Nav = () => {
  return (
    <div>
      <div>
        <Logo />
        <ul>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Logo = () => {
  return <div>KA.</div>;
};

export default Nav;
