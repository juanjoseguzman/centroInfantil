import carrusel1 from "../../../public/Imagenes/cabecera.jpg";
import "./CarruselHome.css"

export function CarruselHome() {
  return (
    <>
      <div className="contenedor position-relative">
        <img className="img-fluid" src={carrusel1} alt="cabecera" />
        <div className="">
        <h1 className="texto-carousel">Guardería infantil </h1>
        <h1 className="texto-carousel2">en Granada</h1>
        

        </div>
        
      </div>
    </>
  );
}
