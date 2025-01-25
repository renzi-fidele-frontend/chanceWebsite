import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./Home.module.css";
import Slides from "../../components/Slides";

const data = [
   {
      titulo: "Izzygreen",
      foto: "https://placehold.co/600x400",
      preco: 100,
      download: 360,
      descricao: "HD video, Novo vasamento,Mais de 300 videos,600 fotos, conteudo quente",
   },
   {
      titulo: "Emmi Saller",
      foto: "https://placehold.co/600x400",
      preco: 35,
      download: 360,
      descricao: "Full HD,  mais de 500 videos,300 fotos, 100Gb",
   },
   {
      titulo: "Sophie Rain",
      foto: "https://placehold.co/600x400",
      preco: 40,
      download: 360,
      descricao: "Garota linda, 365 arquivos, 85  videos full Hd,387 fotos,87GB",
   },
   {
      titulo: "Ivanka",
      foto: "https://placehold.co/600x400",
      preco: 25,
      download: 360,
      descricao: "HD video, 85 arquivos, 59 videos, 76 fotos 35GB",
   },
   {
      titulo: "Snapgod full",
      foto: "https://placehold.co/600x400",
      preco: 65,
      download: 360,
      descricao: "Pasta exclusiva com mais de 900 video,700 fotos videos HD 1000GB",
   },
   {
      titulo: "Kazumi Squirt",
      foto: "https://placehold.co/600x400",
      preco: 100,
      download: 360,
      descricao: "sexy Girl, pasta rara, 3035 arquivos, 265 videos, 2967 fotos 780GB",
   },
   {
      titulo: "Brookeblond",
      foto: "https://placehold.co/600x400",
      preco: 35,
      download: 360,
      descricao: "sexy girl, pasta rara, mais de 200 videos ,500 fotos, 398 arquivos,50GB",
   },
   {
      titulo: "Bella Ramos",
      foto: "https://placehold.co/600x400",
      preco: 15,
      download: 360,
      descricao: "Videos altamente excitatorios, 100 arquivos, 70 videos, 65 fotos 35Gb",
   },
   {
      titulo: "Streamer Girls",
      foto: "https://placehold.co/600x400",
      preco: 80,
      download: 360,
      descricao: "Pasta com mais de 900 videos , 3000 fotos 765 arquivos, mais de 15 modelos diferentes, qualidade HD, 1000GB",
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
                  <Row className="justify-content-center g-3 px-5 mx-auto mt-4">
                     {data.map(({ descricao, foto, titulo, download }, k) => (
                        <Col md={4} key={k}>
                           <Card className="h-100 ">
                              <Card.Img src={foto} />
                              <Card.Body>
                                 <Card.Title>{titulo}</Card.Title>
                                 <Card.Text>{descricao}</Card.Text>
                              </Card.Body>
                              <Card.Footer className="d-flex justify-content-between align-items-center">
                                 <span>
                                    <i className="bi bi-download"></i>{" "}{parseFloat(download).toFixed(2)}
                                 </span>
                                 <div className="d-flex gap-2 justify-content-end">
                                    <Button>
                                       <i className="bi bi-cart"></i> Comprar
                                    </Button>
                                    <Button variant="outline-secondary">Ver detalhes</Button>
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
