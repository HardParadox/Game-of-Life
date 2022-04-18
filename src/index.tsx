import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const container: HTMLElement | null = document.getElementById("root");
if (container) createRoot(container).render(<App />);
