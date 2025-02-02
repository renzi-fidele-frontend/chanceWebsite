import { Col, Container, Row } from "react-bootstrap";
import Slides from "../../components/Slides";
import CardVideo from "../../components/CardVideo";
import { data } from "../../content/data";
import { useTranslation } from "react-i18next";

const Home = () => {
   // TODO: Adicionar funcionalidade de filtragem dos videos
   // TODO: Adicionar estrutura basica do ambiente fullstack
   // TODO: Adicionar funcionalidade de gerenciamento do conteudo do site pelo Admin(Chance)
   const { t } = useTranslation();
   const { slides, tit, subtit } = t("home");

   const items = [
      {
         titulo: slides[0].titulo,
         foto: "https://iili.io/2sRaIwB.jpg",
         descricao: slides[0].descricao,
      },
      {
         titulo: slides[1].titulo,
         foto: "https://iili.io/2sRaTZP.jpg",
         descricao: slides[1].descricao,
      },
      {
         titulo: slides[2].titulo,
         foto: "https://iili.io/2sRaAn1.jpg",
         descricao: slides[2].descricao,
      },
   ];

   return (
      <div>
         <Slides items={items} />
         <Container fluid>
            <Row>
               <Col className="text-center py-5">
                  <h2>
                     {tit} <span className="text-danger fw-bold text-decoration-underline">{subtit}</span>
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
