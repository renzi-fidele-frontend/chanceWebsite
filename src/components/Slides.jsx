import { Carousel, Image } from "react-bootstrap";
import styles from "./Slides.module.css";
import "yet-another-react-lightbox/styles.css";

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

const Slides = () => {
   return (
      <Carousel touch draggable={false}>
         {items.map(({ descricao, foto, titulo }, k) => (
            <Carousel.Item key={k}>
               <div className="position-relative">
                  <Image id={styles.foto} src={foto} fluid />
                  <div id={styles.fundo}></div>
               </div>

               <Carousel.Caption className="text-light mb-lg-4 mb-xxl-5">
                  <h3 id={styles.tit}>{titulo}</h3>
                  <p id={styles.texto}>{descricao}</p>
               </Carousel.Caption>
            </Carousel.Item>
         ))}
      </Carousel>
   );
};
export default Slides;
