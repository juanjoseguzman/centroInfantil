import { Link } from "react-router-dom";

export function BotonesHome({ texto, clase, icono }) {
  return (
    <div className={`${clase}`}>
      <img src={icono} />
      <Link className={`${clase} border-0 text-decoration-none text-white`}>
        {texto}
      </Link>
    </div>
  );
}
