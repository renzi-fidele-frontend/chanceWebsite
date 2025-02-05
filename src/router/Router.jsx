import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Notificacao from "../components/Notificacao";
import Home from "../pages/Home/Home";
import ComoComprar from "../pages/ComoComprar/ComoComprar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Header from "../components/Header/Header";

const Router = () => {
   return (
      <BrowserRouter>
         <div className="App d-flex flex-column text-bg-dark">
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/how_to_buy" element={<ComoComprar />} />
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
            <Notificacao />
         </div>
      </BrowserRouter>
   );
};
export default Router;
