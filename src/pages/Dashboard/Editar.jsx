import { Link, useLocation } from "react-router-dom";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useRef } from "react";

const Editar = () => {
   const pasta = useLocation().state;

   // Refs do form
   const nomeRef = useRef();
   const precoRef = useRef();
   const descricaoRef = useRef();
   const downloadsRef = useRef();
   const previasRef = useRef();

   function editarPasta(e) {
      e.preventDefault();
   }

   function renderizarPrevias() {

   }

   return (
      <Container>
         {pasta ? (
            <Row>
               <Col className="text-center py-5">
                  <i className="bi bi-folder fs-1"></i>
                  <h2 className="mb-4">
                     Edite a pasta: <span className="fst-italic text-decoration-underline text-danger">{pasta.titulo}</span>
                  </h2>
                  <hr />
                  <Form onSubmit={editarPasta} className="text-start mt-5 gap-3 d-flex flex-column ">
                     <Form.Group>
                        <Form.Label>
                           <i className="bi bi-folder"></i> Nome da pasta:
                        </Form.Label>
                        <Form.Control required ref={nomeRef} defaultValue={pasta.titulo} />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>
                           <i className="bi bi-cash"></i> Preço:
                        </Form.Label>
                        <Form.Control required ref={precoRef} type="number" defaultValue={pasta.preco} />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>
                           <i className="bi bi-info-circle"></i> Descrição:
                        </Form.Label>
                        <Form.Control required ref={descricaoRef} defaultValue={pasta.descricao} as="textarea" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>
                           <i className="bi bi-download"></i> Downloads feitos:
                        </Form.Label>
                        <Form.Control required ref={downloadsRef} defaultValue={pasta.download} type="number" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>
                           <i className="bi bi-camera"></i> Prévias do conteúdo:
                        </Form.Label>
                        <Form.Control ref={previasRef} required type="file" multiple accept="image/*" />
                        <div></div>
                     </Form.Group>
                     <div className="d-flex gap-3 mt-4">
                        <Button type="submit">Atualizar</Button>
                        <Button as={Link} to={-1} variant="outline-secondary">
                           Cancelar
                        </Button>
                     </div>
                  </Form>
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
