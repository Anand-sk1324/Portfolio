import React from "react";
import SessionContainer from "./SessionContainer";
import SessionHeading from "./SessionHeading";
import Link from "./Link";
const ContactSession = () => {
  return (
    <SessionContainer id="Contact">
      <SessionHeading>
        Can We <span className="text-white">Work</span> Together?
      </SessionHeading>
      <div className=" px-4 py-3 special-bg text-black font-bold text-lg flex flex-col md:flex-row md:justify-between items-center gap-2 text-center md:max-w-screen-md  xl:max-w-screen-lg md:mx-auto md:rounded-full md:px-10 md:py-6">
        <span>Let’s create something amazing together</span>
        <div className="">
          <a
            href="mailto:anand.sk1324@gmail"
            className="bg-slate-900 px-4 py-2 rounded-lg text-slate-100"
          >
            Mail Me
          </a>
        </div>
      </div>
    </SessionContainer>
  );
};

export default ContactSession;
