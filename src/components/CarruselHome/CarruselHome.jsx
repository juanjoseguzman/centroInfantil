import carrusel1 from "../../../public/Imagenes/cabecera.jpg";

export function CarruselHome() {
  return (
    <>
      <div className="contenedor">
        <img className="img-fluid" src={carrusel1} alt="cabecera" />
      </div>
    </>
  );
}
