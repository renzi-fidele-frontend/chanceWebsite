import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import Slides from "../../components/Slides";

const data = [
   {
      titulo: "Izzygreen",
      foto: "https://iili.io/2LFT5jR.jpg",
      preco: 100,
      download: 211,
      descricao: "HD video, Novo vasamento, Mais de 300 videos, 600 fotos, conteúdo quente",
      link: "https://www.paypal.com/ncp/payment/CJCTPW3J7326G",
   },
   {
      titulo: "Emmi Saller",
      foto: "https://iili.io/2LFTXj4.jpg",
      preco: 35,
      download: 360,
      descricao: "Full HD,  mais de 500 videos, 300 fotos, 100Gb",
      link: "https://www.paypal.com/ncp/payment/F3UVFYZCDFNGS",
   },
   {
      titulo: "Sophie Rain",
      foto: "https://iili.io/2LFTRTv.jpg",
      preco: 40,
      download: 869,
      descricao: "Garota linda, 365 arquivos, 85 videos full Hd, 387 fotos, 87GB",
      link: "https://www.paypal.com/ncp/payment/WT68S63GFCD4A",
   },
   {
      titulo: "Ivanka",
      foto: "https://iili.io/2LFTwn2.jpg",
      preco: 25,
      download: 411,
      descricao: "HD video, 85 arquivos, 59 videos, 76 fotos 35GB",
      link: "https://www.paypal.com/ncp/payment/QP2XHUD9R7MHG",
   },
   {
      titulo: "Snapgod full",
      foto: "https://iili.io/2LFTNGS.jpg",
      preco: 65,
      download: 1100,
      descricao: "Pasta exclusiva com mais de 900 video,700 fotos videos HD 1000GB",
      link: "https://www.paypal.com/ncp/payment/QP2XHUD9R7MHG",
   },
   {
      titulo: "Kazumi Squirt",
      foto: "https://iili.io/2LFT13X.jpg",
      preco: 100,
      download: 799,
      descricao: "sexy Girl, pasta rara, 3035 arquivos, 265 videos, 2967 fotos 780GB",
      link: "https://abrir.link/DvnYF",
   },
   {
      titulo: "Brookeblond",
      foto: "https://iili.io/2LFT7Qp.jpg",
      preco: 35,
      download: 1230,
      descricao: "Sexy girl, pasta rara, mais de 200 videos, 500 fotos, 398 arquivos, 50GB",
      link: "https://www.paypal.com/ncp/payment/323H9T8EGYB2N",
   },
   {
      titulo: "Bella Ramos",
      foto: "https://iili.io/2LFTWuf.jpg",
      preco: 15,
      download: 360,
      descricao: "Videos altamente excitatorios, 100 arquivos, 70 videos, 65 fotos, 35Gb",
      link: "https://www.paypal.com/ncp/payment/XUCZDP4TNFGYA",
   },
   {
      titulo: "Streamer Girls",
      foto: "https://iili.io/2LFTguj.jpg",
      preco: 80,
      download: 73,
      descricao: "Pasta com mais de 900 videos, 3000 fotos 765 arquivos, mais de 15 modelos diferentes, qualidade HD, 1000GB",
      link: "https://www.paypal.com/ncp/payment/LNKHPDR766VJU",
   },
];

const Home = () => {
   // TODO: Adicionar estrutura basica do Footer
   // TODO: Renderizar os videos a serem vendidos
   // TODO: Adicionar funcionalidade de filtragem dos videos
   // TODO: Adicionar estrutura basica do ambiente fullstack
   // TODO: Adicionar funcionalidade de gerenciamento do conteudo do site pelo Admin(Chance)
   // TODO: Mostrar notificação de compra do produto no intervalo de 10sec
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
                     {data.map(({ descricao, foto, titulo, download, link, preco }, k) => (
                        <Col md={3} key={k}>
                           <Card className="h-100 text-bg-dark border border-light position-relative">
                              <Card.Img variant="top" src={foto} />
                              <Card.Body>
                                 <Card.Title>{titulo}</Card.Title>
                                 <Card.Text className="text-truncate text-capitalize">{descricao}</Card.Text>
                              </Card.Body>
                              <Card.Footer className="border-secondary d-flex justify-content-between align-items-center">
                                 <span className="fw-semibold">
                                    <i className="bi bi-download"></i> {download}
                                 </span>
                                 <div className="d-flex gap-2 justify-content-end">
                                    <Button size="sm" as="a" target="_blank" href={link}>
                                       <i className="bi bi-cart"></i> Comprar
                                    </Button>
                                    <Button size="sm" variant="outline-light">
                                       <i className="bi bi-info-circle"></i> Ver detalhes
                                    </Button>
                                 </div>
                              </Card.Footer>
                              <Badge className="position-absolute end-0 top-0 bg-success">{(Math.round(preco * 100) / 100).toFixed(2)} $</Badge>
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
