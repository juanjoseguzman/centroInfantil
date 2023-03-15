import logo from "../../../public/Imagenes/logo.svg";

export function Logo() {
  return (
    <div className="d-flex justify-content-center m-4">
      <img className="col-2" src={logo} />
    </div>
  );
}
