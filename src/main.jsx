import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// Libs
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrowserRouter>
         <div className="App d-flex flex-column  text-bg-dark">
            <Header />

            <Routes>
               <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   </StrictMode>
);
