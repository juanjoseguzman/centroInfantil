import { CardCaracteristicas } from "../CardCaracteristicas/CardCaracteristicas";
import { Boton } from "../Boton/Boton";

import ico1 from "../../../public/Imagenes/ico-1.png";
import ico2 from "../../../public/Imagenes/ico-2.png";
import ico3 from "../../../public/Imagenes/ico-3.png";

export function Caracteristicas() {
  return (
    <div>
      <div className="d-flex justify-content-center gap-3 my-4">
        <div className="col-2 text-center mx-5">
          <CardCaracteristicas
            icono={ico1}
            titulo="Centro adherido a la Junta de Andalucía"
            texto="Nuestro centro de educación infantil está adherido al Programa de Ayuda a las Familias de la Junta de Andalucía, para el fomento de la escolarización en el primer ciclo de la educación infantil en Andalucía."
          />
        </div>
        <div className="col-2 text-center mx-5">
          <CardCaracteristicas
            icono={ico2}
            titulo="Programa bilingüe en inglés"
            texto="Contamos con un programa de bilingüismo en inglés, adaptado al nivel y características de nuestros alumnos/as, para estimularlos en una segunda lengua. También contamos con programas de estimulación del lenguaje, estimulación temprana y de utilización de las TIC."
          />
        </div>
        <div className="col-2 text-center mx-5">
          <CardCaracteristicas
            icono={ico3}
            titulo="37 años de experiencia"
            texto="Nuestro centro educativo fue fundado en 1986 y, desde entonces, nuestra finalidad ha sido la de inculcar valores a través de una educación basada en la afectividad, utilizando una metodología activa, flexible y lúdica, a través de proyectos y áreas."
          />
        </div>
      </div>
      <div className="text-center">
        <Boton texto="+ información" />
      </div>
    </div>
  );
}
