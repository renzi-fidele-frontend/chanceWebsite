import { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { data } from "../content/data";
import { useTranslation } from "react-i18next";

const Notificacao = () => {
   const { t } = useTranslation();
   const { compra, momento, descricao } = t("notificacao");
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
      }, 40000);
      setStart(true);
   }, []);

   return (
      <ToastContainer position="bottom-end" className="position-fixed">
         <Toast bg="danger" show={mostrar} className="mb-4 me-sm-5 mb-sm-5" onClose={() => setMostrar(false)}>
            <Toast.Header>
               <strong className="me-auto">{compra}</strong>
               <small>{momento}</small>
            </Toast.Header>
            <Toast.Body>
               {descricao}{" "}
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
