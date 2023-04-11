import img_covid from "../../../public/Imagenes/Covid/img-1.png";
import TextoProtocoloCovid from "../TextoProtocoloCovid/TextoProtocoloCovid";
import ico1 from "../../../public/Imagenes/Covid/ico-1.png";
import ico2 from "../../../public/Imagenes/Covid/ico-2.png";
import ico3 from "../../../public/Imagenes/Covid/ico-3.png";
import ico4 from "../../../public/Imagenes/Covid/ico-4.png";
import ico5 from "../../../public/Imagenes/Covid/ico-5.png";

export default function ProtocoloCovid() {
  return (
    <div className="container pb-5">
      <div className="d-flex align-items-center justify-content-around pt-5">
        <div className="me-5">
          <p className=" text-secondary pb-3">
            <h2 className="texto-marron mb-4">
              <b>Nuestro protocolo</b>
            </h2>
            El centro educativo sigue un protocolo adaptado a las
            características del mismo, el cual consta de las siguientes medidas:
          </p>
          <TextoProtocoloCovid
            icono={ico1}
            texto="Lavado de manos con agua y jabón de manera frecuente."
          />
          <TextoProtocoloCovid
            icono={ico2}
            texto="Desinfección de juguetes y material tras su utilización."
          />
          <TextoProtocoloCovid
            icono={ico3}
            texto="Desinfección de manos y de zapatos tanto a la entrada del centro"
          />
          <TextoProtocoloCovid
            icono={ico4}
            texto="Compromiso de las familias de llevar a cabo un plan estricto de limpieza."
          />
          <TextoProtocoloCovid
            icono={ico5}
            texto="Los juguetes y materiales personales del alumnado están prohibidos en el interior del centro."
          />
          <TextoProtocoloCovid
            icono={ico1}
            texto="Acceso restringido de los padres al centro y de cualquier otra persona ajena a él."
          />
        </div>
        <div>
          <img className="img-fluid" src={img_covid} alt="cabecera" />
        </div>
      </div>
    </div>
  );
}
