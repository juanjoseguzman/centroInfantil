import logo from "../../../public/Imágenes/logo.svg";
import { BotonesHome } from "../../components/BotonesHome/BotonesHome";
import { botonesHome } from "../../constantes/const.js";

export function Home() {
  return (
    <>
      <div className="d-flex justify-content-center m-4">
        <img className="col-3" src={logo} />
      </div>
      {botonesHome.map((boton) => {
        <div className="col-1">
          <BotonesHome
            clase={boton.clase}
            texto={boton.texto}
            icono={boton.icono}
          />
        </div>;
      })}
    </>
  );
}
