import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
   return (
      <Container className="py-4 px-5 border border-top mt-5 bg-black">
         <Row>
            <Col>
               <Image id={styles.logo} src={logo} alt="Logo do site" />
               <p className="mb-0 mt-2">Explore conteúdos exclusivos e feitos para você.</p>
            </Col>
            <Col className="text-end">
               <h3>Dúvidas online</h3>
               <Button style={{backgroundColor: "#229ED9"}}>
                  <i className="bi bi-telegram me-2"></i> Contatar no Telegram
               </Button>
            </Col>
         </Row>
      </Container>
   );
};
export default Footer;
