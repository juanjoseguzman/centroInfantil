import logo from "../../../public/Imagenes/logo-footer.svg";
import gps from "../../../public/Imagenes/footer-1.png";
import correo from "../../../public/Imagenes/footer-2.png";
import telefono from "../../../public/Imagenes/footer-3.png";
import "./Footer.css";
import { ImagenesFooter } from "../ImagenesFooter/ImagenesFooter";

export function Footer() {
  return (
    <div className="fondo-verde">
      <div className="container p-5 d-flex justify-content-evenly gap-3">
        <div className="col-3">
          <img src={logo} alt="logo" />
          <div className="d-flex gap-1">
            <img className="img-iconos" src={gps} />
            <small className="text-secondary">
              Avenida de América, 42, 18006 Granada
            </small>
          </div>
          <div className="d-flex gap-2">
            <img className="img-iconos" src={correo} />
            <small className="text-secondary">einfinmaculada@gmail.com</small>
          </div>
          <div className="d-flex gap-2">
            <img className="img-iconos" src={telefono} />
            <small className="text-secondary">958 814 306</small>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center  gap-2">
          <ImagenesFooter />
        </div>
      </div>
    </div>
  );
}
