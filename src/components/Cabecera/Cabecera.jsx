import "./Cabecera.css";

export function Cabecera({ imagen }) {
  return (
    <>
      <div className="contenedor position-relative">
        <img className="img-fluid" src={imagen} alt="cabecera" />
      </div>
    </>
  );
}
