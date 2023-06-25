import "./App.css";
import Title from "./componenetes/Title";
import CardWrapper from "./componenetes/CardWrapper";

function App() {
  const numeros = [45, 76, 23, 677, 3, 78];
  return (
    <div className="App">
      {/* 2. Lo usamos */}
      <Title nombre={"Eva!"} />
      <CardWrapper />
      {numeros.map((numero) => (
        <p>El número es:{}</p>
      ))}
      Hola mundo
    </div>
  );
}

export default App;
