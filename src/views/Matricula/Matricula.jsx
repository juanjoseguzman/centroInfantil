import { Cabecera } from "../../components/Cabecera/Cabecera";
import cabeceraMatricula from "../../../public/Imagenes/Matricula/cabecera.jpg";
import ProcesoMatriculacion from "../../components/ProcesoMatriculacion/ProcesoMatriculacion";

export default function Matricula() {
  return (
    <div>
      <Cabecera imagen={cabeceraMatricula} />
      <ProcesoMatriculacion />
    </div>
  );
}
