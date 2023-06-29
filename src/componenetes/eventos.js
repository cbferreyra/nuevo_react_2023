//Tree shaking
import { useState } from "react";
export default function EjemploEventos() {
  //function saludar() {
  // alert("Hola, soy una función");

  // }
  //Entre () indicamos el valor predeterminado, 45
  //[elemento, función que permite modificarlo]
  const [numero, setNumero] = useState(45);
  const [mostrar, setMostrar] = useState(false);
  function sumar() {
    const nuevoNumero = numero + 10;
    setNumero(nuevoNumero);
  }
  return (
    <div>
      {/* Puedo utilizar una función anónima / flecha para el envento 
      <button onClick={saludar}>Saludar</button> */}

      <h2>El número es : {numero}</h2>
      <button
        onClick={() => {
          setMostrar(!mostrar);
        }}
      >
        Mostrar magia
      </button>
      {mostrar && <p>Esta es la magia</p>}
    </div>
  );
}
