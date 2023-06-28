import { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     const getData = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0")
//     const userData = await getData.json();
//     setPokemons(userData.results);
//     setLoading(false);
//   };

  const promiseData = new Promise((resolve, reject) => {    
    resolve(fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0"))    
  })

  useEffect(() => {
      promiseData.then(r => r.json()).then(result => setPokemons(result.results))
      console.log(pokemons)
    // fetchData();
    
  }, []);

  if (loading) return <h1>loading...</h1>;

  return (
    <>
        {pokemons && pokemons.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)}
    </>
  );
};

export default Pokemon;
