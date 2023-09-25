import React from "react";
import { HeaderProps } from "../../types/HeaderTypes";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export { Header };
