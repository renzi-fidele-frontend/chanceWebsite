import { Button, Container, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
   const { t } = useTranslation();
   const { linkText } = t("header");
   return (
      <Container fluid className="bg-black">
         <div className="container d-flex align-items-center justify-content-between w-100 py-3">
            <Navbar.Brand as={Link} to="/" className="fw-medium">
               <Image id={styles.logo} src={logo} alt="Logo do site" />
            </Navbar.Brand>

            <Button as={Link} to="/how_to_buy" variant="success">
               {linkText}
            </Button>

            {/* TODO: Adicionar funcionalidade de alternar o tema entre dark/light */}
         </div>
      </Container>
   );
};
export default Header;
