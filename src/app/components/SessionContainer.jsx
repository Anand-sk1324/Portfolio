import React from "react";

const SessionContainer = ({ children, id = "" }) => {
  return (
    <div className="py-3" id={id}>
      {children}
    </div>
  );
};

export default SessionContainer;
