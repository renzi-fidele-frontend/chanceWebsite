import { Button, Container, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
   return (
      <Container>
         <div className="d-flex align-items-center justify-content-between w-100">
            <Navbar.Brand as={Link} to="/" className="fw-medium">
               <Image id={styles.logo} src={logo} alt="Logo do site" />
            </Navbar.Brand>

            <Button variant="success">Como comprar?</Button>

            {/* TODO: Adicionar funcionalidade de alternar o tema entre dark/light */}
         </div>
      </Container>
   );
};
export default Header;
