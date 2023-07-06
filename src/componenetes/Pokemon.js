import { useEffect, useState } from "react";

export default function Pokemon() {
  const [loading, setLoading] = useState(true);
  //Ya sabemos que va a ser un objeto, así que de manera predeterminada usamos {}
  const [pokemon, setPokemon] = useState({});

  //Los hooks siempre antes del return
  useEffect(() => {
    const endpoint = "https://pokeapi.co/api/v2/pokemon/25";
    //ASYNC con async habilitamos el uso de promesas
    const fetchPokemon = async () => {
      const res = await fetch(endpoint);
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        setPokemon(data);
        setLoading(false);
      } else {
        console.error("Oops,", res.statusText);
      }
    };
    //Llamar a la fx
    fetchPokemon();

    /*     fetch(endpoint).then((res) => {
      console.log(res);
      if (res.ok === true) {
        //Todo ok!
        res.json().then((data) => {
          //Tenemos el Pokemon!
          console.log(data);
          //Guardo al pokemon en la memoria del componente
          setPokemon(data);
          //Seteamos a falso el loading
          setLoading(false);
        });
      } else {
        console.error("Oops,", res.statusText);
      }
    }); */
  }, []);

  if (loading === true) {
    return <h1>Cargando Pokemones...</h1>;
  }

  return (
    <>
      <h1>{pokemon.name}</h1>;
      <p>
        el peso de {pokemon.name} es {pokemon.weight} kg
      </p>
      {pokemon.sprites && <img src={pokemon.sprites.front_default} alt="" />}
    </>
  );
}
