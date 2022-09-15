/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import FavoriteContext from "../Contexts/Favoritescontext";

const Navbar = () => {
const {favoritePokemons} = useContext(FavoriteContext);

    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
    return (
        <nav>
            <div />
            <div className="img-pokemon">
            <img 
            src= {imgUrl} 
            alt="Pokémon"
            className="navbar-img"
            />
            </div>
            <div>
            &#10084;&#65039; {favoritePokemons.length}
            </div>
            <div/>
        </nav>
    )
} 

export default Navbar;