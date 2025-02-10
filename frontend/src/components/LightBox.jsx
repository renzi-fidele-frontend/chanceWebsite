import { useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails } from "yet-another-react-lightbox/plugins";

const LightBox = ({ fotos = [], titulo, descricao, aberto, onClose }) => {
   const captionsRef = useRef(null);
   const thumbnailsRef = useRef(null);

   return (
      <Lightbox
         thumbnails={{ ref: thumbnailsRef }}
         className="text-center"
         open={aberto}
         close={onClose}
         captions={{ ref: captionsRef }}
         plugins={[Captions, Thumbnails]}
         on={{
            click: () => {
               (captionsRef.current?.visible ? captionsRef.current?.hide : captionsRef.current?.show)?.();
               (thumbnailsRef.current?.visible ? thumbnailsRef.current?.hide : thumbnailsRef.current?.show)?.();
            },
         }}
         slides={fotos?.map((v, k) => {
            return {
               src: fotos[k],
               title: titulo,
               description: descricao,
            };
         })}
      />
   );
};
export default LightBox;
