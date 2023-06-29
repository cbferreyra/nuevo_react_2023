import Card from "./Card";
import data from "./data_tarjetas.json";
import "./CardWrapper.css";

export default function CardWrapper() {
  return (
    <div className="wrapper">
      <h2 className="Variedad de guitarras"></h2>

      <div className="grilla">
        {data.map((elemento) => (
          <Card key={elemento.id} producto={elemento} />
        ))}
      </div>
    </div>
  );
}
