import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// Libs
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./router/Router";
import i18n from "./i18n/i18n";
import Provider from "./context/Provider";

// TODO: Adicionar modal com blur confirmando se o cliente é maior de 18 anos
createRoot(document.getElementById("root")).render(
   // TODO: Adicionar um componente de preLoader
   <StrictMode>
      <Suspense fallback={<p>Loading...</p>}>
         <Provider>
            <Router />
         </Provider>
      </Suspense>
   </StrictMode>
);
