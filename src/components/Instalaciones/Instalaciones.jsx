import instalaciones from "../../../public/Imagenes/parallax.jpg"
import "./Instalaciones.css"
export default function Instalaciones() {
    return(
        <div className="pt-5 position-relative">
           <img className="img-fluid img-instalaciones " src={instalaciones} alt="instalaciones" />
           
           <h2 className="texto-marron texto-instalaciones text-center "><b>Nuestras instalaciones</b> </h2>
           <div>
           <p className="text-center col-4 p-instalaciones">
           Contamos con aulas luminosas, excelente ventilación, climatización independiente en cada sala
para adaptar la temperatura a la actividad y amplios espacios exteriores. Tenemos continua
adaptación al marco legislativo y nos adaptamos a las necesidades de los alumnos y alumnas,
guardando todas las normas deseguridad.
           </p>
           </div>
         
        </div>
    )
}