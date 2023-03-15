import { CardComentario } from "../CardComentario/CardComentario";

export function Comentarios() {
  const comentarios = [
    {
      texto:
        "Sin lugar a duda un excelente centro infantil, las maestras son un amor cuidan nuestros niños con mucha dedicación y cariño. La comida, las enseñanzas en conjuntos son los mejores.",
      nombre: "Jennifer Arce Aguirre",
    },
    {
      texto:
        "Asombrada con el gran cambio que mi hijo ha experimentado desde que lo llevamos a esta guardería. Ha evolucionado favorablemente gracias a la entrega incondicional de sus señoritas Victoria y Carmen. Un centro muy recomendable para los peques.",
      nombre: "Inmaculada de la Fuente",
    },
    {
      texto:
        "Es el mejor sitio donde hemos podido llevar a nuestra hija y próximamente meteremos al peque. Son encantadoras, atentas, profesionales... Nuestra hija no sólo aprende sino que viene contentísima. 100% recomendable.",
      nombre: "Jose María Bautista Aguiñar",
    },
  ];

  return (
    <>
      {comentarios ? (
        <div>
          {comentarios.map((comentario, index) => (
            <CardComentario
              key={index}
              texto={comentario.texto}
              nombre={comentario.nombre}
            />
          ))}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
