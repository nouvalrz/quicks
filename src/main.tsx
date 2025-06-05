import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
