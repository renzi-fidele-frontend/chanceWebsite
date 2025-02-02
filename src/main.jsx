import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Libs
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./router/Router";
// TODO: Adicionar modal com blur confirmando se o cliente é maior de 18 anos
createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Router />
   </StrictMode>
);
