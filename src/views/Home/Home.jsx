import logo from "../../../public/Imagenes/logo.svg";
import { BotonesHome } from "../../components/BotonesHome/BotonesHome";
import { CarruselHome } from "../../components/CarruselHome/CarruselHome";
import inicio from "../../../public/Imagenes/menu-1.png";
import presentacion from "../../../public/Imagenes/menu-2.png";
import actividades from "../../../public/Imagenes/menu-3.png";
import matricula from "../../../public/Imagenes/menu-4.png";
// import galeria from "../../../public/Imagenes/menu-8.png";
import horarios from "../../../public/Imagenes/menu-5.png";
import covid from "../../../public/Imagenes/menu-6.png";
import contacto from "../../../public/Imagenes/menu-7.png";
import "./Home.css"; // Pendiente hacer el hover a los botones

export function Home() {
  return (
    <>
      <div className="d-flex justify-content-center m-4">
        <img className="col-2" src={logo} />
      </div>
      <div className="d-flex justify-content-center">
        <div className="botonHomeHover">
          <BotonesHome clase="fondo-azul" texto="Inicio" icono={inicio} />
        </div>
        <div className="">
          <BotonesHome
            clase="fondo-verde"
            texto="Presentación"
            icono={presentacion}
          />
        </div>
        <div className="">
          <BotonesHome
            clase="fondo-amarillo"
            texto="Actividades"
            icono={actividades}
          />
        </div>
        <div className="">
          <BotonesHome
            clase="fondo-crema"
            texto="Matrícula"
            icono={matricula}
          />
        </div>
        <div className="">
          <BotonesHome clase="fondo-azul" texto="Horarios" icono={horarios} />
        </div>
        <div className="">
          <BotonesHome clase="fondo-verde" texto="Covid-19" icono={covid} />
        </div>
        <div className="">
          <BotonesHome
            clase="fondo-amarillo"
            texto="Contacto"
            icono={contacto}
          />
        </div>
      </div>

      <CarruselHome />
    </>
  );
}
