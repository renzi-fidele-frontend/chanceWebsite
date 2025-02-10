import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Image";
import logo from "../assets/logo.png";

const PreLoader = () => {
   return (
      <div style={{ height: "100dvh" }} className="d-flex gap-3 flex-column align-items-center justify-content-center ">
         <Image width={150} src={logo} />
         <Spinner />
      </div>
   );
};
export default PreLoader;
