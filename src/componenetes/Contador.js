export default function Contador() {
  /* Información general:

    -Cantidad
    -precio unitario
    -total

    Información fija:
    -Precio unitario

    Predeterminados:
    cantidad: 0
    Precio_unitario: 500
    -total: 0

     */
  const precio_unitario = 500;

  //Primer paso: Setear la cantidad y mostrarla en el párrafo
  //Memoria del componente
  //Segundo Paso: Hacer andar el +
  //Tercer paso: HAcer andar el -
  //Cuarto paso: Mostrar el total
  return (
    <div>
      <p>Precio unitario: $ {precio_unitario}</p>
      <div>
        <button>Restar -</button>
        <p>CANTIDAD</p>
        <button>Sumar +</button>
      </div>
      <p>Total: $NNNNN</p>
    </div>
  );
}
