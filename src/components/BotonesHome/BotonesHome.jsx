import { BotonHome } from "../BotonHome/BotonHome";

import inicio from "../../../public/Imagenes/menu-1.png";
import presentacion from "../../../public/Imagenes/menu-2.png";
import actividades from "../../../public/Imagenes/menu-3.png";
import matricula from "../../../public/Imagenes/menu-4.png";
// import galeria from "../../../public/Imagenes/menu-8.png";
import horarios from "../../../public/Imagenes/menu-5.png";
import covid from "../../../public/Imagenes/menu-6.png";
import contacto from "../../../public/Imagenes/menu-7.png";
import { Link } from "react-router-dom";

export function BotonesHome() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center ">
        <div className="botonHomeHover">
          <BotonHome
            clase="fondo-azul"
            texto="Inicio"
            icono={inicio}
            direccion="/inicio"
          />
        </div>
        <div className="">
          <BotonHome
            clase="fondo-verde"
            texto="Qué ofrecemos"
            icono={presentacion}
            direccion="/ofrecemos"
          />
        </div>
        <div className="">
          <BotonHome
            clase="fondo-amarillo"
            texto="Actividades"
            icono={actividades}
          />
        </div>
        <div className="">
          <BotonHome
            clase="fondo-crema"
            texto="Matrícula"
            icono={matricula}
            direccion="/matricula"
          />
        </div>

        <div className="">
          <BotonHome clase="fondo-azul" texto="Horarios" icono={horarios} />
        </div>
        <div className="">
          <BotonHome
            clase="fondo-verde"
            texto="Covid-19"
            icono={covid}
            direccion="/covid"
          />
        </div>
        <div className="">
          <BotonHome clase="fondo-amarillo" texto="Contacto" icono={contacto} />
        </div>
      </div>
    </div>
  );
}
