export default function TextoProtocoloCovid({ icono, texto }) {
  return (
    <div className="d-flex align-items-start text-secondary pb-3 gap-2">
      <img className="" src={icono} alt="COVID" />
      {texto}
    </div>
  );
}
