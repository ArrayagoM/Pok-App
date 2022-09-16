import React from "react";
import './Searchbar.css';

const {useState} = React;


const Searchbar = (props) =>{
    const {onSearch} = props;
    const [search, setSearch] = useState('');


const onChange = (evt) => {
setSearch(evt.target.value);
if(evt.target.value.length === 0){
    onSearch(null);
}
    }

const onClick = async (e) => {
    onSearch(search);
}
    return (
<>
<div className="searchbar-container">
    <div className="searchbar">
        <input 
        type="text" 
        placeholder="Buscar Pokémon..."
        onChange={onChange}
        />
        </div>
    <div >
        <button
        className="searchbar-btn" 
        onClick={onClick}>Buscar</button>
    </div>
</div>
</>
    )
}

export default Searchbar;