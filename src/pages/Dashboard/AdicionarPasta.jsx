import { useRef, useState } from "react";
import { renderizarPrevia } from "../../utils/renderizarPrevia";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import Previa from "../../components/Previa/Previa";
import { Link } from "react-router-dom";

const AdicionarPasta = () => {
   const [previas, setPrevias] = useState([]);
   // Refs do form
   const nomeRef = useRef();
   const precoRef = useRef();
   const descricaoRef = useRef();
   const downloadsRef = useRef();
   const previasRef = useRef();
   const fotoDestaqueInput = useRef();
   const linkPagamento = useRef();

   const fotoDestaque = useRef();

   function adicionarPasta(e) {
      e.preventDefault();

      const pasta = {
         titulo: nomeRef.current.value,
         preco: precoRef.current.value,
         descricao: descricaoRef.current.value,
         download: downloadsRef.current.value,
         previas: previasRef.current.value,
         foto: fotoDestaqueInput.current.value,
         link: linkPagamento.current.value,
      };
   }
   return (
      <Container className="text-center py-5">
         <i className="bi bi-folder fs-1"></i>
         <h2 className="mb-4">Adicione uma nova pasta:</h2>
         <hr />
         <Form>
            <Row onSubmit={adicionarPasta} className="mt-5 gx-5">
               <Col className="text-center" lg={7}>
                  <div className="text-start gap-3 d-flex flex-column ">
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-folder"></i> Nome da pasta:
                        </Form.Label>
                        <Form.Control required ref={nomeRef} placeholder="Insira o nome" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-tags"></i> Preço:
                        </Form.Label>
                        <InputGroup>
                           <InputGroup.Text>$</InputGroup.Text>
                           <Form.Control required ref={precoRef} type="number" placeholder="0.00" />
                        </InputGroup>
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-info-circle"></i> Descrição:
                        </Form.Label>
                        <Form.Control required ref={descricaoRef} placeholder="Descreva o conteúdo da pasta" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-cart"></i> Link de pagamento:
                        </Form.Label>

                        <InputGroup>
                        <InputGroup.Text><i className="bi bi-globe"></i></InputGroup.Text>
                        <Form.Control required ref={linkPagamento} placeholder="Insira o link de pagamento do paypal" />
                        </InputGroup>
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-download"></i> Downloads feitos:
                        </Form.Label>
                        <Form.Control required ref={downloadsRef} type="number" placeholder="Insira o número de downloads realizados" />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label className="fw-bold">
                           <i className="bi bi-camera"></i> Prévias do conteúdo:
                        </Form.Label>
                        <Form.Control ref={previasRef} required type="file" multiple accept="image/*" />
                        <div className="d-flex gap-2 flex-wrap mt-3">
                           {/* TODO: Adicionar funcionalidade de remover foto upada na lista de previas */}
                           {previas?.map((v, k) => (
                              <Previa setPrevias={setPrevias} foto={v} key={k} />
                           ))}
                        </div>
                     </Form.Group>
                     <div className="d-flex gap-3 mt-4">
                        <Button type="submit">
                           <i className="bi bi-cloud-plus me-1"></i> Adicionar
                        </Button>
                        <Button as={Link} to={-1} variant="outline-secondary">
                           <i className="bi bi-x-octagon me-1"></i> Cancelar
                        </Button>
                     </div>
                  </div>
               </Col>
               <Col className="text-end">
                  <Form.Label className="fw-bold">
                     <i className="bi bi-camera2"></i> Foto de destaque:{" "}
                  </Form.Label>
                  <Image src="https://placehold.co/600x400" ref={fotoDestaque} className="border border-light  rounded" />
                  <Button as={Form.Label} htmlFor="imgInput" className="w-100 mt-3" variant="light">
                     <i className="bi bi-plus-circle"></i> Adicionar foto
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
export default AdicionarPasta;
