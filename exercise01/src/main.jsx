import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = createRoot(document.querySelector("#root"));
rootElement.render(<App />);
