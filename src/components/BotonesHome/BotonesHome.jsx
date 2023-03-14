import { Link } from "react-router-dom";
import "./BotonesHome.css";

export function BotonesHome({ texto, clase, icono }) {
  return (
    <div className="d-flex ">
      <Link
        className={`${clase} gap-2 p-3 border-0 text-decoration-none text-white custom-rounded efectoHover`}
      >
        <img src={icono} /> {texto}
      </Link>
    </div>
  );
}
