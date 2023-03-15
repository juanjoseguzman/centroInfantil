import bg2 from "../../../public/Imagenes/bg-2.jpg";
import ico4 from "../../../public/Imagenes/ico-4.png";
import "./Datos.css"
export function Datos() {
  return (
    <div className="mt-5 pt-5">
      <img className="img-fluid" src={bg2} alt="fondo" />
      <div className="container">
        <div className="contenedor d-flex">
          <div className="col-1">
            <img className="img-container"  src={ico4} />
          </div>
          <div className="col-1">
            <img className="img-container"  src={ico4} />
          </div>
          <div className="col-1">
            <img className="img-container"  src={ico4} />
          </div>
          <div className="col-1">
            <img className="img-container"  src={ico4} />
          </div>
         
        </div>
      </div>
    </div>
  );
}
