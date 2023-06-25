import Card from "./Card";
import "./CardWrapper.css";

export default function CardWrapper() {
  const data = {
    imagen: "imagenes/gibson_sg.jpg",
    titulo: "Gibson SG",
    descripcion: "Guitarra Gibson SG 1961",
    precio: 1100000,
    envio: true,
  };

  return (
    <div className="wrapper">
      <h2 className="Variedad de guitarras"></h2>

      <div className="grilla">
        <Card producto={data} />
      </div>
    </div>
  );
}
