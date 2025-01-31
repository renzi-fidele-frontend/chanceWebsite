import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { data } from "../content/data";

const Notificacao = () => {
   const [mostrar, setMostrar] = useState(false);
   const [pastaSelecionada, setPastaSelecionada] = useState(null);
   const [start, setStart] = useState(false);

   useEffect(() => {
      if (start) return;
      function apanharPastaAleatoria() {
         setMostrar(true);
         const randomindex = Math.floor(Math.random() * data.length);
         setPastaSelecionada(data[randomindex]);
      }
      setInterval(() => {
         apanharPastaAleatoria();
      }, 30000);
      setStart(true);
   }, []);

   return (
      <ToastContainer position="bottom-end" className="position-fixed">
         <Toast bg="success" show={mostrar} className="me-5 mb-5" onClose={() => setMostrar(false)}>
            <Toast.Header>
               <strong className="me-auto">Compra realizada!</strong>
               <small>Agora mesmo</small>
            </Toast.Header>
            <Toast.Body>
               Alguém comprou a pasta:{" "}
               <a target="_blank" href={pastaSelecionada?.link} role="button" className="text-warning fw-semibold fst-italic">
                  {pastaSelecionada?.titulo}
               </a>
               .
            </Toast.Body>
         </Toast>
      </ToastContainer>
   );
};
export default Notificacao;
