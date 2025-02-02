import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notificacao from "../components/Notificacao";
import Home from "../pages/Home/Home";
import ComoComprar from "../pages/ComoComprar";

const Router = () => {
   return (
      <BrowserRouter>
         <div className="App d-flex flex-column text-bg-dark">
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/how_to_buy" element={<ComoComprar />} />
            </Routes>
            <Footer />
            <Notificacao />
         </div>
      </BrowserRouter>
   );
};
export default Router;
