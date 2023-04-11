import carrusel1 from "../../../public/Imagenes/Covid/cabecera.jpg";
import "./CarruselHome.css";

export function CarruselHome() {
  return (
    <>
      <div className="contenedor position-relative">
        <img className="img-fluid" src={carrusel1} alt="cabecera" />
      </div>
    </>
  );
}
