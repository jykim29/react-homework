import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./index.css";

const rootElement = createRoot(document.querySelector("#root"));
rootElement.render(App());
