import React from "react";

const SessionContainer = ({
  children,
  id = "",
  className = "",
  isHome = false,
}) => {
  return (
    <div className={"scroll-m-16 mb-10 md:mb-20" + className} id={id}>
      {children}
    </div>
  );
};

export default SessionContainer;
