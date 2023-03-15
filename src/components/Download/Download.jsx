import bg1 from "../../../public/Imagenes/bg-1.jpg";
import "./Download.css";

export function Download() {
  return (
    <div className="contenedor">
      <img className="img-fluid z-n1" src={bg1} alt="descarga" />
      <div className="texto flex-column ms-4">
        <h2 className="texto-marron"><b>Descargue nuestra App para el movil</b></h2>
        <p className="text-secondary">
          Consulte toda la información diaria sobre sus hijos : biberones,
          comidas, descanso, deposiciones, etc. en nuestra aplicación gratuita.
          Además, contamos con un servicio de mensajería instantánea y en tiempo
          real entre padres y docentes. Disponible para Iphone y Android.
        </p>
      </div>
    </div>
  );
}
