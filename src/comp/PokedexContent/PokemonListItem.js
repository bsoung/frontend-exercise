function PokemonListItem({ pokemonName, onGetDetails }) {
    return (
        <div className={'pokedex__list-item'}>
            <div>
                {pokemonName}
            </div>
            <button
                onClick={onGetDetails(pokemonName)}
            >
                Get Details
            </button>
        </div>
    )
}

export default PokemonListItem;
