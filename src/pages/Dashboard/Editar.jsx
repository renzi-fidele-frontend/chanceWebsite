import { Link, useLocation } from "react-router-dom";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import Previa from "../../components/Previa/Previa";
import { renderizarPrevia } from "../../utils/renderizarPrevia";

const Editar = () => {
   const pasta = useLocation().state;
   const [previas, setPrevias] = useState([]);

   // Refs do form
   const nomeRef = useRef();
   const precoRef = useRef();
   const descricaoRef = useRef();
   const downloadsRef = useRef();
   const previasRef = useRef();
   const fotoDestaqueInput = useRef();

   const fotoDestaque = useRef();

   function editarPasta(e) {
      e.preventDefault();
   }

   useEffect(() => {
      setPrevias(pasta.previas);
   }, []);

   return (
      <Container className="text-center py-5">
         <i className="bi bi-folder fs-1"></i>
         <h2 className="mb-4">
            Edite a pasta: <span className="fst-italic text-decoration-underline text-danger">{pasta.titulo}</span>
         </h2>
         <hr />
         <Form>
            <Row className="mt-5">
               <Col className="text-center" lg={7}>
                  <div onSubmit={editarPasta} className="text-start gap-3 d-flex flex-column ">
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-folder"></i> Nome da pasta:
                        </Form.Label>
                        <Form.Control required ref={nomeRef} defaultValue={pasta.titulo} />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-tags"></i> Preço:
                        </Form.Label>
                        <Form.Control required ref={precoRef} type="number" defaultValue={pasta.preco} />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-info-circle"></i> Descrição:
                        </Form.Label>
                        <Form.Control required ref={descricaoRef} defaultValue={pasta.descricao} as="textarea" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-download"></i> Downloads feitos:
                        </Form.Label>
                        <Form.Control required ref={downloadsRef} defaultValue={pasta.download} type="number" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-camera"></i> Prévias do conteúdo:
                        </Form.Label>
                        <Form.Control ref={previasRef} required type="file" multiple accept="image/*" />
                        <div className="d-flex gap-2 flex-wrap mt-3">
                           {/* TODO: Adicionar funcionalidade de remover foto upada na lista de previas */}
                           {previas.map((v, k) => (
                              <Previa setPrevias={setPrevias} foto={v} key={k} />
                           ))}
                        </div>
                     </Form.Group>
                     <div className="d-flex gap-3 mt-4">
                        <Button type="submit">
                           <i className="bi bi-floppy"></i> Atualizar
                        </Button>
                        <Button as={Link} to={-1} variant="outline-secondary">
                           <i className="bi bi-x-octagon"></i> Cancelar
                        </Button>
                     </div>
                  </div>
               </Col>
               <Col className="text-end">
                  <Form.Label className="fw-bold">
                     <i className="bi bi-camera2"></i> Foto de destaque:{" "}
                  </Form.Label>
                  <Image src={pasta.foto} ref={fotoDestaque} className="border border-light  rounded" />
                  <Button as={Form.Label} htmlFor="imgInput" className="w-100 mt-3" variant="light">
                     <i className="bi bi-plus-circle"></i> Alterar foto
                  </Button>
                  <input
                     onChange={() => {
                        renderizarPrevia(fotoDestaque, fotoDestaqueInput.current.files[0]);
                     }}
                     ref={fotoDestaqueInput}
                     type="file"
                     accept="image/*"
                     hidden
                     id="imgInput"
                  />
               </Col>
            </Row>
         </Form>
      </Container>
   );
};
export default Editar;
