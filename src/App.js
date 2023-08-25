import { useEffect, useState } from "react";
import { fetchPokemonDetailsByName, fetchEvolutionChainById } from "./api";

import {
    formatPokemonMoves,
    formatPokemonTypes,
} from './utils';

import { useFetchPokemon } from './hooks';

function App() {
    const { pokemonIndex, isLoading, errorMessage } = useFetchPokemon();

    const [pokemon, setPokemon] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [pokemonDetails, setPokemonDetails] = useState();

    useEffect(() => {
        setPokemon(pokemonIndex);
    }, [pokemonIndex]);

    const onSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        const results = pokemonIndex.filter(monster => monster.name.includes(value));
        setPokemon(results);
    }

    const onGetDetails = (pokemonName) => async () => {
        /** code here **/
        const pokemonDetails = await fetchPokemonDetailsByName(pokemonName);

        const chainId = pokemonDetails?.id;
        const evolutions = await fetchEvolutionChainById(chainId);

        const details = {
            name: pokemonName,
            moves: formatPokemonMoves(pokemonDetails?.moves),
            types: formatPokemonTypes(pokemonDetails?.types),
            evolutions,
        };

        console.log(details);
    }

    if (isLoading) {
        return null;
    }

    return (
        <div className={'pokedex__container'}>
            {errorMessage && <p>An error has occurred!</p>}
            <div className={'pokedex__search-input'}>
                <input value={searchValue} onChange={onSearchValueChange} placeholder={'Search Pokemon'}/>
            </div>
            <div className={'pokedex__content'}>
                {pokemon.length > 0 && (
                    <div className={'pokedex__search-results'}>
                        {
                            pokemon.map(monster => {
                                return (
                                    <div className={'pokedex__list-item'} key={monster.name}>
                                        <div>
                                            {monster.name}
                                        </div>
                                        <button onClick={onGetDetails(monster.name)}>Get Details</button>
                                    </div>
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
        </div>
    );
}

export default App;
