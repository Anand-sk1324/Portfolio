import React from "react";
import SessionContainer from "./SessionContainer";
import SessionHeading from "./SessionHeading";
import Link from "./Link";
const ContactSession = () => {
  return (
    <SessionContainer>
      <SessionHeading>Can We Work Together?</SessionHeading>
      <div>
        Let’s create something amazing together
        <Link href="mailto:anand.sk1324@gmail" type="primary++">
          Mail Me
        </Link>
      </div>
    </SessionContainer>
  );
};

export default ContactSession;
