import { Accordion, Col, Container, Row } from "react-bootstrap";
import Slides from "../components/Slides";

const items = [
   {
      titulo: "1 - Selecione a pasta desejada",
      foto: "https://iili.io/2ZkmTFt.jp",
      descricao: "Explore conteúdos exclusivos e feitos para você. Descubra um universo de desejo com total privacidade e segurança.",
   },
   {
      titulo: "2 - Efectuar o pagamento no paypal",
      foto: "https://iili.io/2ZkmzPI.jp",
      descricao: "Material premium, 100% original e irresistível. Mergulhe na experiência única que você merece.",
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

const ComoComprar = () => {
   return (
      <div>
         <Slides items={items} />
         <Container className="mt-5 mb-4">
            <Row>
               <Col>
                  <h2 className="fw-bold text-center mb-4">Perguntas Frequentes</h2>
                  <div>
                     {perguntasErespostas.map(({ pergunta, resposta }, k) => (
                        <Accordion key={k}>
                           <Accordion.Item eventKey="0">
                              <Accordion.Header>{pergunta}</Accordion.Header>
                              <Accordion.Body>{resposta}</Accordion.Body>
                           </Accordion.Item>
                        </Accordion>
                     ))}
                  </div>
               </Col>
            </Row>
            {/* TODO: Mostrar logo das opções de pagamento aqui ou no rodapé */}
         </Container>
      </div>
   );
};
export default ComoComprar;
