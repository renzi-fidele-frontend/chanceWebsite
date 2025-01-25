import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slides from "../../components/Slides";

const data = [
   {
      titulo: "Izzygreen",
      foto: "https://iili.io/2LFT5jR.jpg",
      preco: 100,
      download: 360,
      descricao: "HD video, Novo vasamento, Mais de 300 videos, 600 fotos, conteúdo quente",
   },
   {
      titulo: "Emmi Saller",
      foto: "https://iili.io/2LFTXj4.jpg",
      preco: 35,
      download: 360,
      descricao: "Full HD,  mais de 500 videos, 300 fotos, 100Gb",
   },
   {
      titulo: "Sophie Rain",
      foto: "https://iili.io/2LFTRTv.jpg",
      preco: 40,
      download: 360,
      descricao: "Garota linda, 365 arquivos, 85 videos full Hd, 387 fotos, 87GB",
   },
   {
      titulo: "Ivanka",
      foto: "https://iili.io/2LFTwn2.jpg",
      preco: 25,
      download: 360,
      descricao: "HD video, 85 arquivos, 59 videos, 76 fotos 35GB",
   },
   {
      titulo: "Snapgod full",
      foto: "https://iili.io/2LFTNGS.jpg",
      preco: 65,
      download: 360,
      descricao: "Pasta exclusiva com mais de 900 video,700 fotos videos HD 1000GB",
   },
   {
      titulo: "Kazumi Squirt",
      foto: "https://iili.io/2LFT13X.jpg",
      preco: 100,
      download: 360,
      descricao: "sexy Girl, pasta rara, 3035 arquivos, 265 videos, 2967 fotos 780GB",
   },
   {
      titulo: "Brookeblond",
      foto: "https://iili.io/2LFT7Qp.jpg",
      preco: 35,
      download: 360,
      descricao: "sexy girl, pasta rara, mais de 200 videos, 500 fotos, 398 arquivos, 50GB",
   },
   {
      titulo: "Bella Ramos",
      foto: "https://iili.io/2LFTWuf.jpg",
      preco: 15,
      download: 360,
      descricao: "Videos altamente excitatorios, 100 arquivos, 70 videos, 65 fotos, 35Gb",
   },
   {
      titulo: "Streamer Girls",
      foto: "https://iili.io/2LFTguj.jpg",
      preco: 80,
      download: 360,
      descricao: "Pasta com mais de 900 videos, 3000 fotos 765 arquivos, mais de 15 modelos diferentes, qualidade HD, 1000GB",
   },
];

const Home = () => {
   // TODO: Adicionar estrutura basica do Footer
   // TODO: Renderizar os videos a serem vendidos
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
               <div className="px-5 mx-5">
                  <Row className="justify-content-center g-4 px-5 mx-auto mt-4">
                     {data.map(({ descricao, foto, titulo, download }, k) => (
                        <Col md={4} key={k}>
                           <Card className="h-100 text-bg-dark border border-light">
                              <Card.Img variant="top" src={foto} />
                              <Card.Body>
                                 <Card.Title>{titulo}</Card.Title>
                                 <Card.Text className="text-truncate text-capitalize">{descricao}</Card.Text>
                              </Card.Body>
                              <Card.Footer className="border-secondary d-flex justify-content-between align-items-center">
                                 <span className="fw-semibold">
                                    <i className="bi bi-download"></i> {parseFloat(download).toFixed(2)}
                                 </span>
                                 <div className="d-flex gap-2 justify-content-end">
                                    <Button>
                                       <i className="bi bi-cart"></i> Comprar
                                    </Button>
                                    <Button variant="outline-light">
                                       <i className="bi bi-info-circle"></i> Ver detalhes
                                    </Button>
                                 </div>
                              </Card.Footer>
                           </Card>
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
