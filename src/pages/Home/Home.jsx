import { Col, Container, Row } from "react-bootstrap";
import Slides from "../../components/Slides";
import CardVideo from "../../components/CardVideo";
import { data } from "../../content/data";

const Home = () => {
   // TODO: Adicionar funcionalidade de filtragem dos videos
   // TODO: Adicionar estrutura basica do ambiente fullstack
   // TODO: Adicionar funcionalidade de gerenciamento do conteudo do site pelo Admin(Chance)

   return (
      <Container fluid>
         <Slides />
         <Row>
            <Col className="text-center py-5 ">
               <h2>
                  Acesse conteúdo exclusivo de <span className="text-danger fw-bold text-decoration-underline">alta qualidade</span>
               </h2>

               {/* Vídeos */}
               <div className="px-2 px-xl-5">
                  <Row className="justify-content-center g-4 px-xxl-5 mx-auto mt-4">
                     {data.map(({ descricao, foto, titulo, download, link, preco, previas }, k) => (
                        <Col md={6} lg={4} xxl={3} key={k}>
                           <CardVideo
                              descricao={descricao}
                              foto={foto}
                              titulo={titulo}
                              download={download}
                              link={link}
                              preco={preco}
                              previas={previas}
                           />
                        </Col>
                     ))}
                  </Row>
               </div>
            </Col>
         </Row>
      </Container>
   );
};
export default Home;
