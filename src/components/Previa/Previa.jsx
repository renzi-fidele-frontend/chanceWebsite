import { Button, Image } from "react-bootstrap";
import styles from "./Previa.module.css";
import { useState } from "react";
import LightBox from "../LightBox";

const Previa = ({ foto, setPrevias }) => {
   const [mostrar, setMostrar] = useState(false);
   return (
      <div id={styles.hovParent} className="position-relative">
         <Image className={styles.previa} src={foto} thumbnail />
         <div id={styles.hov} className="d-flex gap-1 position-absolute bottom-0 end-0 start-0 mx-2 mb-2 ">
            <Button size="sm" onClick={() => setMostrar(true)} className="border" variant="success">
               <i className="bi bi-eye"></i>
            </Button>
            <Button
               size="sm"
               onClick={() => {
                  setPrevias((prevState) => prevState.filter((v) => v !== foto));
               }}
               className="border"
               variant="danger"
            >
               <i className="bi bi-trash"></i>
            </Button>
         </div>
         <LightBox aberto={mostrar} onClose={() => setMostrar(false)} fotos={[foto]} />
      </div>
   );
};
export default Previa;
