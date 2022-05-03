import React from "react";
import style from "./Field.css";

const Row: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const Field: React.FC<{ rows: number; column: number }> = ({
  rows,
  column,
}) => <div className={`${style.field} ${style.field_lightTheme}`}></div>;
