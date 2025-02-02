import { Accordion } from "react-bootstrap";

const Acordeao = ({ pergunta, resposta, key }) => {
   return (
      <Accordion defaultActiveKey={0}>
         <Accordion.Item eventKey={key}>
            <Accordion.Header>{pergunta}</Accordion.Header>
            <Accordion.Body>{resposta}</Accordion.Body>
         </Accordion.Item>
      </Accordion>
   );
};
export default Acordeao;
