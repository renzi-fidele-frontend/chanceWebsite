import { useLocation } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";

const Editar = () => {
   const pasta = useLocation().state;

   return (
      <Container>
         {pasta ? (
            <Row>
               <Col className="text-center py-5">
                  <i className="bi bi-folder fs-1"></i>
                  <h2>
                     Edite a pasta: <span className="fst-italic text-decoration-underline text-danger">{pasta?.titulo}</span>
                  </h2>
               </Col>
            </Row>
         ) : (
            <Row>
               <Col className="text-center">
                  <Alert>Nenhuma pasta foi selecionada</Alert>
               </Col>
            </Row>
         )}
      </Container>
   );
};
export default Editar;
