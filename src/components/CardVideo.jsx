import { useRef, useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails } from "yet-another-react-lightbox/plugins";
// Plugins
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const CardVideo = ({ descricao, foto, titulo, download, link, preco, previas }) => {
   const [aberto, setAberto] = useState(false);
   const captionsRef = useRef(null);
   const thumbnailsRef = useRef(null);
   return (
      <Card bg={preco === 0 ? "secondary" : "black"} className={`h-100 text-bg-dark   position-relative ${preco === 0 && "border"}`}>
         <Card.Img variant="top" src={foto} />
         <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text className="text-truncate text-capitalize">{descricao}</Card.Text>
         </Card.Body>
         <Card.Footer className={`${preco === 0 ? "border-light" : "border-secondary"}  d-flex justify-content-between align-items-center`}>
            <span className="fw-semibold">
               <i className="bi bi-download"></i> {download}
            </span>
            <div className="d-flex gap-2 justify-content-end">
               <Button variant={preco === 0 ? "success" : "primary"} size="sm" as="a" target="_blank" href={link}>
                  <i className={`bi bi-${preco === 0 ? "unlock" : "cart"}`}></i> {preco === 0 ? "Acessar" : "Comprar"}
               </Button>
               <Button onClick={() => setAberto(true)} size="sm" variant="outline-light">
                  <i className="bi bi-eye"></i> Ver conteúdo
               </Button>
            </div>
            {/* Lightbox */}
            <Lightbox
               thumbnails={{ ref: thumbnailsRef }}
               className="text-center"
               open={aberto}
               close={() => setAberto(false)}
               captions={{ ref: captionsRef }}
               plugins={[Captions, Thumbnails]}
               on={{
                  click: () => {
                     (captionsRef.current?.visible ? captionsRef.current?.hide : captionsRef.current?.show)?.();
                     (thumbnailsRef.current?.visible ? thumbnailsRef.current?.hide : thumbnailsRef.current?.show)?.();
                  },
               }}
               slides={previas?.map((v, k) => {
                  return {
                     src: previas[k],
                     title: titulo,
                     description: descricao,
                  };
               })}
            />
         </Card.Footer>
         {preco === 0 ? (
            <Badge className="position-absolute end-0 top-0 bg-success">-- Gratuito --</Badge>
         ) : (
            <Badge className="position-absolute end-0 top-0 bg-danger">{(Math.round(preco * 100) / 100).toFixed(2)} $</Badge>
         )}
      </Card>
   );
};
export default CardVideo;
