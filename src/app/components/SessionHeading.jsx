import React from "react";

const SessionHeading = ({ children }) => {
  return (
    <div className="text-xl md:text-3xl lg:text-4xl font-bold mx-auto w-fit mb-4 md:mb-5 lg:mb-8 text-center">
      {children}
    </div>
  );
};

export default SessionHeading;
