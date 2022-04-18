import React from "react";
import style from "./Header.css";

export const Header: React.FC<{ title: string; dark?: boolean }> = ({
  title,
  dark,
}) => (
  <header
    className={`${style.header} ${style.header_font} ${
      dark ? style.header_darkTheme : style.header_lightTheme
    }`}
  >
    {title}
  </header>
);
