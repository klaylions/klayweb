import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC: React.FC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width: 901px) ",
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, PC };
