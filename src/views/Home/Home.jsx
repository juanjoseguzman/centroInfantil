import { Descripcion } from "../../components/Descripcion/Descripcion";
import { Caracteristicas } from "../../components/Caracteristicas/Caracteristicas";
import "./Home.css"; // Pendiente hacer el hover a los botones
import { Download } from "../../components/Download/Download";
import { BotonesHome } from "../../components/BotonesHome/BotonesHome";
import { Comentarios } from "../../components/Comentarios/Comentarios";
import { Datos } from "../../components/Datos/Datos";
import Docente from "../../components/Docente/Docente";
import Instalaciones from "../../components/Instalaciones/Instalaciones";
import { Logo } from "../../components/Logo/Logo";
import { Footer } from "../../components/Footer/Footer";
import { Cabecera } from "../../components/Cabecera/Cabecera";
import cabecera from "../../../public/Imagenes/cabecera.jpg";

export function Home() {
  return (
    <>
      <Cabecera imagen={cabecera} />
      <Descripcion />
      <Caracteristicas />
      <Download />
      <Comentarios />
      <Datos />
      <Docente />
      <Instalaciones />
    </>
  );
}
