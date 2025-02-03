import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import styles from "./Slides.module.css";
import "yet-another-react-lightbox/styles.css";

const Slides = ({ items }) => {
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
