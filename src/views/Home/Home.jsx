import logo from "../../../public/Imagenes/logo.svg";
import { CarruselHome } from "../../components/CarruselHome/CarruselHome";
import { Descripcion } from "../../components/Descripcion/Descripcion";
import { Caracteristicas } from "../../components/Caracteristicas/Caracteristicas";
import "./Home.css"; // Pendiente hacer el hover a los botones
import { Download } from "../../components/Download/Download";
import { BotonesHome } from "../../components/BotonesHome/BotonesHome";
import { Comentarios } from "../../components/Comentarios/Comentarios";

export function Home() {
  return (
    <>
      <div className="d-flex justify-content-center m-4">
        <img className="col-2" src={logo} />
      </div>
      <BotonesHome />
      <CarruselHome />
      <Descripcion />
      <Caracteristicas />
      <Download />
      <Comentarios />
    </>
  );
}
