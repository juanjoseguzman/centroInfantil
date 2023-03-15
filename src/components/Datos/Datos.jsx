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
            <h4 className="textoIcon texto-marron" >Innovación</h4 >
          </div>
          <div className="col-1">
            <img className="img-container2"  src={ico5} />
            <h4 className="textoIcon2 texto-marron">Horarios flexibles</h4 >
          </div>
          <div className="">
            <img className="img-container3"  src={ico6} />
            <h4 className="textoIcon3 texto-marron ">Dieta saludable</h4>
          </div>
          <div className="col-1">
            <img className="img-container4"  src={ico7} />
            <h4 className="textoIcon4 texto-marron">Confianza</h4 >
          </div>
         <div>
         
         </div>
        </div>
      </div>
    </div>
  );
}
