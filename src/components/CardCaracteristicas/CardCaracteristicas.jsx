export function CardCaracteristicas({ icono, titulo, texto }) {
  return (
    <div>
      <div className="mb-3">
        <img src={icono} alt={titulo} />
      </div>
      <div className="mb-3">
        <h2 className="texto-marron">{titulo}</h2>
      </div>
      <div className="text-secondary mb-3">
        <p>{texto}</p>
      </div>
    </div>
  );
}
