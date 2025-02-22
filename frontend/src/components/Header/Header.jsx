import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { ContextValue } from "../../context/Provider";
import i18n from "../../i18n/i18n";
import { useEffect } from "react";

const Header = () => {
   const { estado, dispatch } = ContextValue();
   const { t } = useTranslation();
   const { linkText } = t("header");

   i18n.on("languageChanged", (idiomaNovo) => {
      dispatch({ type: "setIdioma", payload: idiomaNovo });
   });

   function mudarIdioma(idiomaNovo) {
      i18n.changeLanguage(idiomaNovo);
   }

   // Ao se chegar na página detectando o idioma
   useEffect(() => {
      dispatch({ type: "setIdioma", payload: i18n.language });
   }, []);

   return (
      <Container fluid className="bg-black">
         <div className="container px-0 d-flex align-items-center justify-content-between w-100 py-3">
            <Navbar.Brand as={Link} to="/" className="fw-medium">
               <Image id={styles.logo} src={logo} alt="Logo do site" />
            </Navbar.Brand>

            <div className="d-flex gap-2 gap-sm-3 align-items-center">
               <Button as={Link} to="/how_to_buy" variant="success">
                  {linkText}
               </Button>
               {/* BTN de mudar idioma */}
               <Dropdown>
                  <Dropdown.Toggle variant="outline-light">
                     <i className="bi bi-globe"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item
                        active={estado.idioma === "en"}
                        onClick={() => {
                           mudarIdioma("en");
                        }}
                     >
                        🇬🇧 English
                     </Dropdown.Item>
                     <Dropdown.Item
                        active={estado.idioma === "de"}
                        onClick={() => {
                           mudarIdioma("de");
                        }}
                     >
                        🇩🇪 Deutsch
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </div>

            {/* TODO: Adicionar funcionalidade de alternar o tema entre dark/light */}
         </div>
      </Container>
   );
};
export default Header;
