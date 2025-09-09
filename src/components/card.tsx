// Ejemplo de props con TypeScript
interface Props {
  title: string;
  text: string;
}

function Card() {
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">
        <CardBody title="Hola Mundo" text="Estamos dentro de card" />
      </div>
    </div>
  );
}

function CardBody({ title, text }: Props) {
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
     
    </>
  );
}

export default Card;
