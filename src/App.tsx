import React from "react";
import { Main } from "@/screens";
import style from "./app.css";

export const App: React.FC<unknown> = () => (
  <div className={`${style.app} ${style.app_lightTheme}`}>
    <Main />
  </div>
);
