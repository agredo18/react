function Titulo() {
  const name = "Titulo";

  if (name) {
    return <p>Hola {name} dentro del if</p>;
  }

  return <p>Hola {name}</p>;
}

export default Titulo;
