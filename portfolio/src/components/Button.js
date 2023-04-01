import React from "react";
import "../styles/index.scss";

export const Button = ({ children, ...rest }) => {
  return (
    <button className="commonButton" {...rest}>
      {children}
    </button>
  );
};
