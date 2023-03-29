import carrusel1 from "../../../public/Imagenes/cabecera.jpg";
import "./CarruselHome.css";

export function CarruselHome() {
  return (
    <>
      <div className="contenedor position-relative">
        <img className="img-fluid" src={carrusel1} alt="cabecera" />
        <div className="">
          <h1 className=" col-5 texto-carousel text-center">
            Centro infantil en Granada
          </h1>
        </div>
      </div>
    </>
  );
}
