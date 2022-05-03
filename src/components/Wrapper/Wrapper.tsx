import React from "react";
import style from "./Wrapper.css";

export const Wrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <div className={style.container}>
    <div className={style.container__wrap}>{children}</div>
  </div>
);
