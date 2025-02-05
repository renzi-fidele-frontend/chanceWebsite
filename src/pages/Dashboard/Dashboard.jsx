import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { data } from "../../content/data";

const Dashboard = () => {
   return (
      <Container>
         <Row>
            <Col className="text-center py-5">
               <h2>Gerenciador do conteúdo do site</h2>
               <hr />

               <Table striped className="mt-4 text-start">
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Pasta</th>
                        <th>Downloads</th>
                        <th>Preço</th>
                        <th>Acções</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.map(({ titulo, download, preco, foto }, k) => (
                        <tr key={k}>
                           <td>{k + 1}</td>
                           <td>
                              <div className="d-flex align-items-center gap-2">
                                 <Image width={40} thumbnail src={foto} />
                                 <h4 className="text-capitalize mb-0 text-truncate">{titulo}</h4>
                              </div>
                           </td>
                           <td>
                              {download} <i className="bi bi-download"></i>
                           </td>
                           <td>{(Math.round(preco * 100) / 100).toFixed(2)} $</td>
                           <td>
                              <div className="d-flex gap-2">
                                 <Button size="sm">Ver</Button>
                                 <Button size="sm" variant="outline-secondary">
                                    Editar
                                 </Button>
                                 <Button size="sm" variant="outline-danger">
                                    Remover
                                 </Button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   );
};
export default Dashboard;
