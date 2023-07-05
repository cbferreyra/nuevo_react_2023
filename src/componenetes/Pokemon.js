
import { useEffect } from "react";
import { useState} from "react";
export default function Pokemon () {
    const [loading, setLoading] = useState (true);
    const [pokemon, setPokemon] = useState ({});
    useEffect (()=> {
fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
.then ((res)=> {console.log(res);
  if (res.ok === true) {
    //Todo ok!
    res.json()
    .then ((data) =>{
      //Tenemos el Pokemon!
      console.log(data);
      //Guardo al Pokemon en la momoria del componente
      setPokemon(data)
      //seteamos a falso el loading
      setLoading(false);
    } )
  }else{
    console.error ("Oops,", res.statusText)
  }
});

    },[]);
    if (loading === true) {
      return (
        <h1>Cargando Pokemones...</h1>
      )
    }
    //Mostrar el nombre del Pokemón
    return (
      <>
       <h1>{pokemon.name}</h1> 
      <p>el peso de {pokemon.name} es {pokemon.weight}</p>
      </>
    )
}
