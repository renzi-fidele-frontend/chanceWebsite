import { Col, Container, Row } from "react-bootstrap";
import Slides from "../../components/Slides";
import CardVideo from "../../components/CardVideo";
import { data } from "../../content/data";

const items = [
   {
      titulo: "Prazer Sob Medida",
      foto: "https://iili.io/2sRaIwB.jpg",
      descricao: "Explore conteúdos exclusivos e feitos para você. Descubra um universo de desejo com total privacidade e segurança.",
   },
   {
      titulo: "Conteúdo Que Te Faz Ir Além",
      foto: "https://iili.io/2sRaTZP.jpg",
      descricao: "Material premium, 100% original e irresistível. Mergulhe na experiência única que você merece.",
   },
   {
      titulo: "Seu Desejo, Nossa Inspiração",
      foto: "https://iili.io/2sRaAn1.jpg",
      descricao: "Criações exclusivas e personalizadas, entregues com discrição e alta qualidade. Dê o próximo passo no mundo do prazer.",
   },
];

const Home = () => {
   // TODO: Adicionar funcionalidade de filtragem dos videos
   // TODO: Adicionar estrutura basica do ambiente fullstack
   // TODO: Adicionar funcionalidade de gerenciamento do conteudo do site pelo Admin(Chance)

   return (
      <div>
         <Slides items={items} />
         <Container fluid>
            <Row>
               <Col className="text-center py-5">
                  <h2>
                     Acesse conteúdo exclusivo de <span className="text-danger fw-bold text-decoration-underline">alta qualidade</span>
                  </h2>

                  {/* Vídeos */}
                  <div className="px-2 mx-xxl-4 px-xl-5">
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
      </div>
   );
};
export default Home;
