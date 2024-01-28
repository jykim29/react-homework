import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./index.css";

const rootElement = createRoot(document.querySelector("#root"));
rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
