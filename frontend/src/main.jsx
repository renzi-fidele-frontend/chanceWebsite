import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// Libs
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./router/Router";
import i18n from "./i18n/i18n";
import Provider from "./context/Provider";
import PreLoader from "./components/PreLoader";
import { Analytics } from "@vercel/analytics/react";

// TODO: Adicionar modal com blur confirmando se o cliente é maior de 18 anos
createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Suspense fallback={<PreLoader />}>
         <Provider>
            <Router />
         </Provider>
         <Analytics />
      </Suspense>
   </StrictMode>
);
