import correo from "../../../public/Imágenes/header1.png";
import telefono from "../../../public/Imágenes/header2.png";

export default function Navbar() {
  return (
    <div className="fondo-verde d-flex justify-content-around">
      <div className="d-flex flex-row align-items-center gap-3 m-3">
        <img src={correo} />
        <div className="d-flex flex-row align-items-center text-white">
          einfinmaculada@gmail.com
        </div>
      </div>
      <div className="d-flex flex-row align-items-center gap-3">
        <img src={telefono} />
        <div className="d-flex flex-row align-items-center text-white">
          958 81 43 06
        </div>
      </div>
    </div>
  );
}
