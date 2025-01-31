import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Libs
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./router/Router";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Router />
   </StrictMode>
);
