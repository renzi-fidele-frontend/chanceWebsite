import { Accordion } from "react-bootstrap";

const Acordeao = ({pergunta, resposta}) => {
   return (
      <Accordion  >
         <Accordion.Item >
            <Accordion.Header>{pergunta}</Accordion.Header>
            <Accordion.Body>{resposta}</Accordion.Body>
         </Accordion.Item>
      </Accordion>
   );
};
export default Acordeao;
