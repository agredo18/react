import { CardBody } from "./CardBody";

function Card() {
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">
        <CardBody title="Hola mundo" text="estamos dentro de la card" />
      </div>
    </div>
  );
}

export default Card;
