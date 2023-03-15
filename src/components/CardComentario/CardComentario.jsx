import opiniones from "../../../public/Imagenes/opiniones.png";
import "./CardComentario.css";

export function CardComentario({ texto, nombre }) {
  console.log(texto);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="col-10">
          <div className="borde d-flex flex-column col-3 text-center p-3 rounded">
            <small className="text-secondary">{texto}</small>
            <div className="mt-3">
              <p className="mb-0 texto-verde ">{nombre}</p>
              <img src={opiniones} alt="rating" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
