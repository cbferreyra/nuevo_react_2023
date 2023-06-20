import "./App.css";
import Title from "./componenetes/Title";
import Card from "./componenetes/Card";
function App() {
  return (
    <div className="App">
      {/* Comentario en JSX */}
      <Title nombre={"Eva!"} />
      <Card />
      Hola mundo
    </div>
  );
}

export default App;
