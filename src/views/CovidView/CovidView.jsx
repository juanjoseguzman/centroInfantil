import { Cabecera } from "../../components/Cabecera/Cabecera";
import ProtocoloCovid from "../../components/ProtocoloCovid/ProtocoloCovid";
import cabeceraCovid from "../../../public/Imagenes/Covid/cabecera.jpg";

export function CovidView() {
  return (
    <>
      <Cabecera imagen={cabeceraCovid} />
      <ProtocoloCovid />
    </>
  );
}
