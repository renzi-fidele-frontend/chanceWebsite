import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Slides from "../../components/Slides";
import ill from "../assets/ill.png";
import styles from "./ComoComprar.module.css";
import ft1 from "../assets/mastercard.svg";
import ft2 from "../assets/paypal.svg";
import ft3 from "../assets/security-code.svg";
import ft4 from "../assets/visa.svg";
import Acordeao from "../../components/Acordeao";
import { useTranslation } from "react-i18next";
import { ContextValue } from "../../context/Provider";

const metodosDePagamento = [ft1, ft2, ft3, ft4];

const ComoComprar = () => {
   const { estado } = ContextValue();
   const { t } = useTranslation();
   const { instrucoes, perguntasErespostas, faqsTit, methods } = t("howToBuy");
   const items = [
      {
         titulo: instrucoes[0].titulo,
         foto: estado.idioma === "en" ? "https://iili.io/2ZyZaHP.jpg" : "https://iili.io/2t9gJLB.jpg",
         descricao: instrucoes[0].descricao,
      },
      {
         titulo: instrucoes[1].titulo,
         foto: "https://iili.io/2ZkmzPI.jp",
         descricao: instrucoes[1].descricao,
      },
   ];

   return (
      <div>
         <Slides items={items} />
         <Container className="mt-5 mb-5">
            <Row>
               <Col className="text-center">
                  <h2 className="fw-bold text-center mb-4">{faqsTit}</h2>
                  <Image src={ill} id={styles.foto} className="mb-4" />
                  <div className="text-start mb-5">
                     {perguntasErespostas.map(({ pergunta, resposta }, k) => (
                        <Acordeao pergunta={pergunta} resposta={resposta} key={k} />
                     ))}
                  </div>
                  <hr />
                  <h2 className="mt-5 fw-bold text-center mb-5">{methods}</h2>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                     {metodosDePagamento.map((v, k) => (
                        <Image className={styles.metodoPagamento} src={v} key={k} />
                     ))}
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};
export default ComoComprar;
