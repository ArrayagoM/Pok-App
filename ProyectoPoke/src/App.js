import React from 'react';
import { getPokemonData, getPokemons, serachPokemon } from './api';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex';
import Searchbar from './components/searchbar';
import { FavoriteProvider } from "./Contexts/Favoritescontext";


const { useState,  useEffect} = React;
const localStorageKey = "favorite_pokemon";

export default function App() {

  const [pokemons, setPokemons] = useState ([]);
  const [page, setPage] = useState(0);
  const[total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorite] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
try {
  setLoading(true);
  const data = await getPokemons(25, 25 * page);
  const pormises = data.results.map( async (pokemon)=>{
  return await getPokemonData(pokemon.url)
});
const results = await Promise.all(pormises)
setPokemons(results);
setLoading(false);
setTotal(Math.ceil(data.count / 25));
setNotFound(false);
} catch (error) {
  
}
  };
  const loadFavoritePkemons = ()=>{
   const pokemons =
   JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
   setFavorite(pokemons)
  }

  useEffect(()=>{
    loadFavoritePkemons();
    console.log("Obteniendo Pokémones favoritos")
  }, [])

  useEffect(() =>{
    console.log("Todos los Pokémones")
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name)=>{
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >= 0){
    updated.splice(isFavorite, 1);
    }else {
      updated.push(name);
    }
    setFavorite(updated);
    window.localStorage.setItem(localStorageKey, 
      JSON.stringify(updated)
      );
  };

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true)
    const result = await serachPokemon(pokemon);
    if(!result){
     setNotFound(true);
     setLoading(false);
     return;
    }else {
      setPokemons([result])
    }
  
    setLoading(false)
  }

  return (
   <FavoriteProvider value={{favoritePokemons: favorites, 
    updateFavoritePokemons: updateFavoritePokemons
   }}>
    <Main/>
    <div className="App">
     
   <div>
   <Navbar/>
      <Searchbar onSearch={onSearch}/>
      {notFound ?(
    <div>No se encontro el Pokémon que estas Buscando!!!...😣😭</div> 
    ) :(
      <div>
        { loading ? 
        <div> <div class="wrapper">
      <div class="pokeball">
      </div>
    </div><p>Cargando Pokémones...</p></div>
        :
        <Pokedex
        loading={loading}
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
      />
        }</div>
    ) 
    }
   
   </div>
    </div>
   </FavoriteProvider>
  );

  
}

