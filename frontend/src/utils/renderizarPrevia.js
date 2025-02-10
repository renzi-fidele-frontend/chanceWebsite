export function renderizarPrevia(destino, ficheiroUpado) {
   const reader = new FileReader();
   reader.onloadend = () => {
      destino.current.src = reader.result;
   };
   reader.readAsDataURL(ficheiroUpado);
}
