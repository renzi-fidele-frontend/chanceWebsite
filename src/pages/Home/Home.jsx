import { Col, Container, Row } from "react-bootstrap";
import Slides from "../../components/Slides";
import CardVideo from "../../components/CardVideo";

const data = [
   {
      titulo: "Izzygreen",
      foto: "https://iili.io/2LFT5jR.jpg",
      preco: 100,
      download: 211,
      descricao: "HD video, Novo vasamento, Mais de 300 videos, 600 fotos, conteúdo quente",
      link: "https://www.paypal.com/ncp/payment/CJCTPW3J7326G",
      previas: [
         "https://iili.io/2LKkjQj.jpg",
         "https://iili.io/2LKkhhb.jpg",
         "https://iili.io/2LKkNCx.jpg",
         "https://iili.io/2LKk5Is.jpg",
         "https://iili.io/2LKkDvt.jpg",
         "https://iili.io/2LKkZ3N.jpg",
         "https://iili.io/2LKkbyX.jpg",
         "https://iili.io/2LKkL4p.jpg",
         "https://iili.io/2LKkpun.jpg",
         "https://iili.io/2LKkyjs.jpg",
      ],
   },
   {
      titulo: "Emmi Saller",
      foto: "https://iili.io/2LFTXj4.jpg",
      preco: 35,
      download: 360,
      descricao: "Full HD,  mais de 500 videos, 300 fotos, 100Gb",
      link: "https://www.paypal.com/ncp/payment/F3UVFYZCDFNGS",
      previas: [
         "https://iili.io/2LfIQTJ.jpg",
         "https://iili.io/2LfItQR.jpg",
         "https://iili.io/2LfIspa.jpg",
         "https://iili.io/2LfIZhv.jpg",
         "https://iili.io/2LfIbBp.jpg",
         "https://iili.io/2LfIp4I.jpg",
         "https://iili.io/2LfTHYX.jpg",
         "https://iili.io/2LfT92t.jpg",
         "https://iili.io/2LfTJvn.jpg",
         "https://iili.io/2LfTdps.jpg",
      ],
   },
   {
      titulo: "Sophie Rain",
      foto: "https://iili.io/2LFTRTv.jpg",
      preco: 40,
      download: 869,
      descricao: "Garota linda, 365 arquivos, 85 videos full Hd, 387 fotos, 87GB",
      link: "https://www.paypal.com/ncp/payment/WT68S63GFCD4A",
      previas: [
         "https://iili.io/2Lf4ZCX.jpg",
         "https://iili.io/2Lf4sjI.jpg",
         "https://iili.io/2Lf4iTN.jpg",
         "https://iili.io/2Lf4LQt.jpg",
         "https://iili.io/2Lf4D4s.jpg",
         "https://iili.io/2Lf4m3G.jpg",
         "https://iili.io/2Lf4paf.jpg",
         "https://iili.io/2Lf4yv4.jpg",
         "https://iili.io/2Lf6djS.webp",
         "https://iili.io/2Lf62Z7.webp",
      ],
   },
   {
      titulo: "Ivanka",
      foto: "https://iili.io/2LFTwn2.jpg",
      preco: 25,
      download: 411,
      descricao: "HD video, 85 arquivos, 59 videos, 76 fotos 35GB",
      link: "https://www.paypal.com/ncp/payment/QP2XHUD9R7MHG",
      previas: [
         "https://iili.io/2ZJxrMP.jpg",
         "https://iili.io/2ZJxgoB.jpg",
         "https://iili.io/2ZJxStV.jpg",
         "https://iili.io/2ZJx8wQ.jpg",
         "https://iili.io/2ZJx4P1.jpg",
         "https://iili.io/2ZJxPKF.jpg",
         "https://iili.io/2ZJxicg.jpg",
         "https://iili.io/2ZJxsSa.jpg",
         "https://iili.io/2ZJxQHJ.jpg",
         "https://iili.io/2ZJxZAv.jpg",
      ],
   },
   {
      titulo: "Snapgod full",
      foto: "https://iili.io/2LFTNGS.jpg",
      preco: 65,
      download: 1100,
      descricao: "Pasta exclusiva com mais de 900 video,700 fotos videos HD 1000GB",
      link: "https://www.paypal.com/ncp/payment/QP2XHUD9R7MHG",
      previas: [
         "https://iili.io/2ZJT4PS.jpg",
         "https://iili.io/2ZJTvAG.jpg",
         "https://iili.io/2ZJT8Nf.jpg",
         "https://iili.io/2ZJTil9.jpg",
         "https://iili.io/2ZJTsSe.jpg",
         "https://iili.io/2ZJTQHu.jpg",
         "https://iili.io/2ZJTZAb.jpg",
         "https://iili.io/2ZJTDDx.jpg",
         "https://iili.io/2ZJTmoQ.jpg",
         "https://iili.io/2ZJTpVV.jpg",
      ],
   },
   {
      titulo: "Kazumi Squirt",
      foto: "https://iili.io/2LFT13X.jpg",
      preco: 100,
      download: 799,
      descricao: "sexy Girl, pasta rara, 3035 arquivos, 265 videos, 2967 fotos 780GB",
      link: "https://abrir.link/DvnYF",
      previas: [
         "https://iili.io/2ZJ5Hf2.jpg",
         "https://iili.io/2ZJRpV4.jpg",
         "https://iili.io/2ZJRDDG.jpg",
         "https://iili.io/2ZJRmxf.jpg",
         "https://iili.io/2ZJ5dU7.webp",
         "https://iili.io/2ZJ5KOu.jpg",
         "https://iili.io/2ZJ5JlS.jpg",
         "https://iili.io/2ZJ53J9.jpg",
         "https://iili.io/2ZJ5Bxj.webp",
         "https://iili.io/2ZJ5niQ.jpg",
      ],
   },
   {
      titulo: "Brookeblond: Sexy girl",
      foto: "https://iili.io/2LFT7Qp.jpg",
      preco: 35,
      download: 1230,
      descricao: "Sexy girl, pasta rara, mais de 200 videos, 500 fotos, 398 arquivos, 50GB",
      link: "https://www.paypal.com/ncp/payment/323H9T8EGYB2N",
      previas: [
         "https://iili.io/2ZJ7r3N.jpg",
         "https://iili.io/2ZJ7PyX.jpg",
         "https://iili.io/2ZJ76vt.jpg",
         "https://iili.io/2ZJ74aI.jpg",
         "https://iili.io/2ZJ7Ljs.jpg",
         "https://iili.io/2ZJ7DG4.jpg",
         "https://iili.io/2ZJ7b6l.jpg",
         "https://iili.io/2ZJYccN.jpg",
         "https://iili.io/2ZJY7PR.jpg",
         "https://iili.io/2ZJYGNn.jpg",
      ],
   },
   {
      titulo: "Bella Ramos",
      foto: "https://iili.io/2LFTWuf.jpg",
      preco: 15,
      download: 360,
      descricao: "Videos altamente excitatorios, 100 arquivos, 70 videos, 65 fotos, 35Gb",
      link: "https://www.paypal.com/ncp/payment/XUCZDP4TNFGYA",
      previas: [
         "https://iili.io/2ZdHLoG.jpg",
         "https://iili.io/2ZdHits.jpg",
         "https://iili.io/2ZdHPNn.jpg",
         "https://iili.io/2ZdHQVf.jpg",
         "https://iili.io/2ZdHZP4.jpg",
         "https://iili.io/2ZdHbl2.jpg",
         "https://iili.io/2ZdJ9R9.jpg",
         "https://iili.io/2ZdHmSS.jpg",
         "https://iili.io/2ZdJJDu.jpg",
         "https://iili.io/2ZdJ2ob.jpg",
      ],
   },
   {
      titulo: "Fanbus",
      foto: "https://iili.io/2LFTguj.jpg",
      preco: 80,
      download: 73,
      descricao: "Pasta com mais de 900 videos, 3000 fotos 765 arquivos, mais de 15 modelos diferentes, qualidade HD, 1000GB",
      link: "https://www.paypal.com/ncp/payment/LNKHPDR766VJU",
      previas: [
         "https://iili.io/2ZdKR8Q.jpg",
         "https://iili.io/2ZdKAcx.jpg",
         "https://iili.io/2ZdKuFj.jpg",
         "https://iili.io/2ZdKI6b.jpg",
         "https://iili.io/2ZdK79V.jpg",
         "https://iili.io/2ZdKYAB.jpg",
         "https://iili.io/2ZdKawP.jpg",
         "https://iili.io/2ZdKct1.webp",
         "https://iili.io/2ZdK0oF.jpg",
         "https://iili.io/2ZdK1Mg.jpg",
      ],
   },
];

const Home = () => {
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
