import docente from "../../../public/Imagenes/page1-img1.png"
import { Boton } from "../Boton/Boton"
export default function Docente(){

    return(
        <div className="container pt-5 pb-5">
            
            
            <div className="d-flex align-items-center justify-content-around pt-5">
                <div className="col-5">
            <p className=" text-secondary"><h2 className="texto-marron mb-4"><b>Equipo docente</b></h2>Todo nuestro personal cuenta con eltítulo de Maestro de Educación
                Infantil,en el caso de las tutoras del aula,y la titulación de Maestro 
                o Técnico Superior de Educación Infantil,en el caso de los profesores
                de apoyo.
                Además de esto,nuestro personal se encuentra en continua formación
                teniendo un amplio currículo de cursos,jornadas y sobre todo muchos
                años de experiencia</p>
                <Boton className=" mt-5" texto="+ información" />
                </div>
                
                <div>

                <img className="img-fluid" src={docente} alt="cabecera" />
                </div>
                
                </div>
               
                        </div>
        
    )
}