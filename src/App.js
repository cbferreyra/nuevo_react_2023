import "./App.css";
import Title from "./componenetes/Title";
import CardWrapper from "./componenetes/CardWrapper";
import EjemploEventos from "./componenetes/eventos";
import Contador from "./componenetes/Contador";
import Pokemon from "./componenetes/Pokemon";
import Pokemon from "./componenetes/Pokemon";
function App() {
  const numeros = [45, 76, 23, 677, 3, 78];
  return (
    <div className="App">
      <Pokemon />
      <EjemploEventos />
      {/* 2. Lo usamos */}
      <Title nombre={"Eva!"} />
      <Contador />
      <CardWrapper />
      {numeros.map((numero) => (
        <p>El número es:{}</p>
      ))}
      Hola mundo
    </div>
  );
}

export default App;
