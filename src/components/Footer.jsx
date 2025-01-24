import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
   return (
      <Container className="py-2">
         <Row>
            <Col>
               <Image id={styles.logo} src={logo} alt="Logo do site" />
               <p></p>
            </Col>
            <Col></Col>
         </Row>
      </Container>
   );
};
export default Footer;
