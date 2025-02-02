import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import Slides from "../components/Slides";
import ill from "../assets/ill.png";
import styles from "./ComoComprar.module.css";
import ft1 from "../assets/mastercard.svg";
import ft2 from "../assets/paypal.svg";
import ft3 from "../assets/security-code.svg";
import ft4 from "../assets/visa.svg";
import Acordeao from "../components/Acordeao";

const items = [
   {
      titulo: "1 - Selecione a pasta desejada",
      foto: "https://iili.io/2ZkmTFt.jp",
      descricao:
         "Navegue pela nossa coleção e escolha a pasta de conteúdo que deseja adquirir. Certifique-se de verificar as prévias e descrições para selecionar exatamente o que procura.",
   },
   {
      titulo: "2 - Efectuar o pagamento no paypal",
      foto: "https://iili.io/2ZkmzPI.jp",
      descricao:
         "Após escolher sua pasta, realize o pagamento com segurança via PayPal. Assim que a transação for confirmada, o acesso ao conteúdo será liberado imediatamente.",
   },
];

const perguntasErespostas = [
   {
      pergunta: "O que fazer no caso de o link de uma pasta parar de funcionar?",
      resposta:
         "Se o link de acesso à pasta não estiver funcionando, entre em contato conosco pelo Telegram o mais rápido possível. Nossa equipe verificará o problema e fornecerá um novo link caso necessário.",
   },
   {
      pergunta: "Quanto tempo leva para ter acesso à pasta após efetuar o pagamento?",
      resposta:
         "O acesso é liberado imediatamente após a confirmação do pagamento. Caso tenha qualquer problema, entre em contato pelo Telegram para suporte.",
   },
   {
      pergunta: "Quais métodos de pagamento estão disponíveis?",
      resposta:
         "Atualmente, aceitamos pagamentos exclusivamente via PayPal e VISA. Se precisar de mais informações sobre o processo de pagamento, entre em contato conosco.",
   },
];

const metodosDePagamento = [ft1, ft2, ft3, ft4];

const ComoComprar = () => {
   return (
      <div>
         <Slides items={items} />
         <Container className="mt-5 mb-5">
            <Row>
               <Col className="text-center">
                  <h2 className="fw-bold text-center mb-4">Perguntas Frequentes</h2>
                  <Image src={ill} id={styles.foto} className="mb-4" />
                  <div className="text-start mb-5">
                     {perguntasErespostas.map(({ pergunta, resposta }, k) => (
                        <Acordeao pergunta={pergunta} resposta={resposta} key={k} />
                     ))}
                  </div>
                  <hr />
                  <h2 className="mt-5 fw-bold text-center mb-5">Métodos de pagamento disponíveis</h2>
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
