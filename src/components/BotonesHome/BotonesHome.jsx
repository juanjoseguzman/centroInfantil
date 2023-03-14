import { Link } from "react-router-dom";
import "./BotonesHome.css";

export function BotonesHome({ texto, clase, icono }) {
  return (
    <Link
      className={`${clase}  p-3 m-0 border-0 text-decoration-none text-white custom-rounded `}
    >
      <img src={icono} />
      {texto}
    </Link>
  );
}
