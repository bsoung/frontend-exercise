
import PokemonListItem from './PokemonListItem';
import PokemonDetails from './PokemonDetails';

function PokedexContent({
    pokemon,
    pokemonDetails,
    onGetDetails,
}) {
    const { name, moves, types, evolutions } = pokemonDetails || {};

    return (
        <div className={'pokedex__content'}>
                {pokemon.length > 0 && (
                    <div className={'pokedex__search-results'}>
                        {
                            pokemon.map(({ name: pokemonName }) => {
                                return (
                                    <PokemonListItem
                                        key={pokemonName}
                                        pokemonName={pokemonName}
                                        onGetDetails={onGetDetails}
                                    />
                                )
                            })
                        }
                    </div>
                )}
                {
                    pokemonDetails && (
                        <PokemonDetails
                            name={name}
                            moves={moves}
                            types={types}
                            evolutions={evolutions}
                        />
                    )
                }
            </div>
    );
}

export default PokedexContent;
