export function CardCaracteristicas({ icono, titulo, texto }) {
  return (
    <div>
      <div className="mb-3">
        <img src={icono} alt={titulo} />
      </div>
      <div className="mb-3">
        <h4 className="texto-marron">{titulo}</h4>
      </div>
      <div className="text-secondary mb-3">
        <small>{texto}</small>
      </div>
    </div>
  );
}
