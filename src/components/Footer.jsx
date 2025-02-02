import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
   const { t } = useTranslation();
   const { p, contact, duvidas } = t("footer");
   return (
      <Container className="py-4 px-5 border border-top mt-5 bg-black">
         <Row className="mb-4 mb-md-0">
            <Col className="text-center text-md-start" md={6}>
               <Image id={styles.logo} src={logo} alt="Logo do site" />
               <p className="mb-0 mt-2">{p}</p>
            </Col>
            <Col className="mt-3 mt-md-0 text-center text-md-end">
               <hr className="d-md-none" />
               <h3 className="mb-3 mb-md-2">{duvidas}</h3>
               <a target="_blank" href="https://t.me/+RcEFSoRa5LwyMWM0">
                  <Button style={{ backgroundColor: "#229ED9" }}>
                     <i className="bi bi-telegram me-2"></i>
                     {contact}
                  </Button>
               </a>
            </Col>
         </Row>
      </Container>
   );
};
export default Footer;
