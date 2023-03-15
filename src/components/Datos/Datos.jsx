import bg2 from "../../../public/Imagenes/bg-2.jpg";
import ico4 from "../../../public/Imagenes/ico-4.png";
import ico5 from "../../../public/Imagenes/ico-5.png";
import ico6 from "../../../public/Imagenes/ico-6.png";
import ico7 from "../../../public/Imagenes/ico-7.png";
import "./Datos.css"
export function Datos() {
  return (
    <div className="mt-5 pt-5">
      <img className="img-fluid" src={bg2} alt="fondo" />
      <div className="container">
        <div className="contenedor">
        
          <div className="col-1">
            <img className="img-container "  src={ico4} />
          </div>
          <div className="col-1">
            <img className="img-container2"  src={ico5} />
          </div>
          <div className="col-1">
            <img className="img-container3"  src={ico6} />
          </div>
          <div className="col-1">
            <img className="img-container4"  src={ico7} />
          </div>
         <div>
         
         </div>
        </div>
      </div>
    </div>
  );
}
