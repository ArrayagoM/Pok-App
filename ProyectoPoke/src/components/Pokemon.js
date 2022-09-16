import React, { useContext } from "react";
import '../components/Pokemon.css'
import FavoriteContext from "../Contexts/Favoritescontext";

const Pokemon = (props) => {
    const {pokemon} = props;
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeard = "💖";
    const blackHeard = "🖤";
    const heard = favoritePokemons.includes(pokemon.name) ? redHeard : blackHeard;
    
    const clickHeart = (e) => {
      e.preventDefault();
   updateFavoritePokemons(pokemon.name);
    }
    return (
        <div className="Pokemon-card">        
          <div className="pokemon-img-conteiner">
            <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name}
            className="pokemon-img"
            />
          </div>
          <div className="card-body">
            <div className="card-top">
              <h3>{pokemon.name}</h3>
              <div>#{pokemon.id}</div>
            </div>
            <div className="card-botton">
            <div className="pokemon-type">
            {pokemon.types.map((type, idx)=>{
                    return (
                        <div key={idx} className="pokemon-type-text" >
                          {type.type.name}
                          </div>
                    );
                })}
            </div>
            <button onClick={clickHeart}>
            <div className="pokemon-favorito">{heard}</div>
            </button>
            </div>
          </div>
        </div>
    );
};

export default Pokemon;