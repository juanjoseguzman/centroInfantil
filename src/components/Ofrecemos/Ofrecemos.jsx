import "./Ofrecemos.css"
import carrusel1 from "../../../public/Imagenes/Que_ofrecemos/cabecera.jpg";
import bg from "../../../public/Imagenes/Que_ofrecemos/bg-1.jpg"
import img1 from "../../../public/Imagenes/Que_ofrecemos/img-1.png"
import img2 from "../../../public/Imagenes/Que_ofrecemos/img-2.png"
import icono from "../../../public/Imagenes/Que_ofrecemos/icon-1.png"
import icono2 from "../../../public/Imagenes/Que_ofrecemos/icon-2.png"
import icono3 from "../../../public/Imagenes/Que_ofrecemos/icon-3.png"
import icono4 from "../../../public/Imagenes/Que_ofrecemos/icon-4.png"
import icono5 from "../../../public/Imagenes/Que_ofrecemos/icon-5.png"
export function Ofrecemos() {
  return (
    <>
      <div className="contenedor position-relative">
        <img className="img-fluid" src={carrusel1} alt="cabecera" />
      </div>
      <div className="container pt-5 pb-5">
            
            
            <div className="d-flex align-items-center justify-content-around pt-5">
                <div className="col-5">
                <p className=" text-secondary pb-3 "><h2 className="texto-marron mb-4"><b>Educación de calidad </b></h2>
                En centro Infatil María Inmaculada ofrecemos una asistencia y una educación de calidad. Además, contamos con:
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono} /> Atención y enseñanza personalizada a niños y niñas de 0 a 3 años.
                </div>
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono2} /> Horario de 7:30h a 17:00h, flexible (a la llegada y a la salida), 
                    adaptado a las necesidades de las familias y de los alumnos y alumnas.
                </div>
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono3} /> Un entorno agradable y familiar donde los niños y niñas se sientan seguros, felices y queridos.
                </div>
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono4} /> Servicio de aula matinal.
                </div>
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono5} /> Servicio de comedor. El servicio de comedor está disponible desde el primer dia del inicio del curso hasta el final.
                    Contamos con un catering de calidad, ofertando dos tipos de menús según las necesidades especificas de cada niño/a según su edad, 
                    teniendo en cuenta también sus alergias o intolerancias.
                </div>
                
               
                </p>
                </div> 
                <div>
                <img className="img-fluid" src={img1} alt="educacion" />
                </div>
                
                </div>
                
                </div>
                <div className="contenedor">
                    <img className="img-fluid " src={bg} alt="comunicacion" />
                    <div className="texto flex-column ms-4">
                    <h2 className="texto-marron"><b>Comunicación con las familias</b></h2>
                    <p className="text-secondary">
                    La labor del centro educativo se basa en la educación compartida en la que 
                    es prioritaria la implicación de los padres.
                    </p>
                <p className="text-secondary">
                    Utilizamos una agenda digital donde diariamente informamos a las familias
                    de todo lo relacionado con sus hijos/as durante la jornada.
                </p>
            </div>
            </div>
            <div className="container pt-5 pb-5">
            
            
            <div className="d-flex align-items-center justify-content-around pt-5">
                <div className="col-5">
                <p className=" text-secondary pb-3 "><h2 className="texto-marron mb-4"><b>Proyecto educativo </b></h2>
                Contamos con un Proyecto Educativo, propio adaptado al nivel y características de nuestros alumnos/as, 
                para lograr el desarrollo máximo de sus capacidades y en el que nuestra prioridad es conseguir 
                ampliamente todos los objetivos marcados para esta etapa que abarca desde los 0-3 años. A lo largo
                del curso desarrollamos también diferentes programas:
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono} /> Programa de bilinguismo en inglés.
                </div>
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono2} /> Programa de estimulación del lenguaje.
                </div>
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono3} /> Programa de estimulación temprana.
                </div>
                <div className="d-flex align-items-start pt-3 gap-2">
                    <img src={icono4} /> Programa de utilización de las TIC.
                </div>
                
                
               
                </p>
                </div> 
                <div>
                <img className="img-fluid" src={img2} alt="educacion" />
                </div>
                
                </div>
                
                </div>
    </>
  );
}
