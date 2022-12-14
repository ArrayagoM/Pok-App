import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";


const Pokedex = (props) => {
    const {pokemons, page, setPage, total, loading} = props;

    const lastPages = () => {
        const lastPage = Math.max(page - 1, 0);
        setPage(lastPage);
      };
      const nextPages = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
      };
    return (
        <>
        <div className="header">
            <h1>Pokedex</h1>
            <div>
            <Pagination
            page={page +1}
            totalPages={total}
            onLeftClick={lastPages}
            onRightClick={nextPages}
            />
            </div>
            </div>
            {loading ? (
                <div>Cargando Pokémones...</div>
            ): (
             <div className="pokedex-grid">
                {pokemons.map((pokemon, idx)=>{
                return <Pokemon pokemon={pokemon} key={pokemon.name} />
             })}
            </div>
            )}
            
        </>
    )
}
export default Pokedex;