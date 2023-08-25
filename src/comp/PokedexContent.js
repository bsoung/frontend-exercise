
import PokemonListItem from './PokemonListItem';

function PokedexContent({
    pokemon,
    pokemonDetails,
    onGetDetails,
}) {
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
                        <div className={'pokedex__details'}>
                            {/*  code here  */}
                        </div>
                    )
                }
            </div>
    );
}

export default PokedexContent;
