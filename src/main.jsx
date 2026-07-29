import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../app/globals.css";
import "../app/polish.css";
import Page from "../app/page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
