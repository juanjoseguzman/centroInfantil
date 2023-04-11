import img_matricula from "../../../public/Imagenes/Matricula/img-1.png";
import TextoProtocoloCovid from "../TextoProtocoloCovid/TextoProtocoloCovid";
import ico1 from "../../../public/Imagenes/Matricula/ico-1.png";
import ico2 from "../../../public/Imagenes/Matricula/ico-2.png";
import bg1 from "../../../public/Imagenes/Matricula/bg.jpg";

export default function ProtocoloCovid() {
  return (
    <div className="container pb-5">
      <div className="d-flex align-items-center justify-content-around pt-5">
        <div className="me-5">
          <p className=" text-secondary pb-3">
            <h2 className="texto-marron mb-4">
              <b>Proceso de matriculación</b>
            </h2>
            Serían aptos para el proceso de matriculación todos los niños/as que
            cumplan los siguientes requisitos:
          </p>
          <TextoProtocoloCovid
            icono={ico1}
            texto="Edad comprendida entre 16 semanas y 3 años."
          />
          <TextoProtocoloCovid
            icono={ico2}
            texto="Estar empadronados en Andalucía."
          />
          <p className=" text-secondary pb-3">
            Pueden solicitar los documentos en nuestro centro o descargarlos en
            el Portal de escolarización de la Junta de Andalucía en el apartado
            de 0-3 años. Los enlaces para ello son los siguientes:
          </p>
        </div>
        <div>
          <img className="img-fluid" src={img_matricula} alt="cabecera" />
        </div>
      </div>
    </div>
  );
}
