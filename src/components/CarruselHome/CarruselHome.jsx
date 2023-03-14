import carrusel1 from "../../../public/Imagenes/cabecera.jpg";
import facebook from "../../../public/Imagenes/facebook.png";
import instagram from "../../../public/Imagenes/instagram.png";

import "./CarruselHome.css";

export function CarruselHome() {
  return (
    <>
      <div className="contenedor">
        <img className="img-fluid" src={carrusel1} alt="cabecera" />
        <div className="d-flex flex-column gap-2 botones ">
          <button className="border-0 facebook ">
            <img src={facebook} />
          </button>
          <button className="border-0 instagram">
            <img src={instagram} />
          </button>
        </div>
      </div>
    </>
  );
}
