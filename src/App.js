import { useEffect, useState } from "react";
import { fetchPokemonDetailsByName, fetchPokemonSpeciesByName, fetchEvolutionChainById } from "./api";

import {
    SearchHeader,
    PokedexContent,
} from './comp';

import {
    formatPokemonMoves,
    formatPokemonTypes,
    formatPokemonEvolutions,
    getEvolutionChainIdFromSpecies,
} from './utils';

import { useFetchPokemon } from './hooks';

function App() {
    const { pokemonIndex, isLoading, errorMessage } = useFetchPokemon();

    const [pokemon, setPokemon] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [pokemonDetails, setPokemonDetails] = useState();
    const [loadingDetails, setLoadingDetails] = useState(false);

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
        if (loadingDetails) {
            return;
        }

        try {
            const pokemonDetailsPromise = fetchPokemonDetailsByName(pokemonName);
            const speciesPromise = fetchPokemonSpeciesByName(pokemonName);

            const [pokemonDetails, species] = await Promise.all(
                [pokemonDetailsPromise, speciesPromise]
            );

            const chainId = getEvolutionChainIdFromSpecies(species);
            const evolutions = await fetchEvolutionChainById(chainId);

            const details = {
                name: pokemonName,
                moves: formatPokemonMoves(pokemonDetails?.moves),
                types: formatPokemonTypes(pokemonDetails?.types),
                evolutions: formatPokemonEvolutions(evolutions),
            };

            setPokemonDetails(details);
        } catch (error) {
            // todo more error handling
            console.error(error.message);
        } finally {
            setLoadingDetails(false);
        }
    }

    if (isLoading) {
        return null;
    }

    return (
        <div className={'pokedex__container'}>
            {errorMessage && <p>An error has occurred!</p>}
            <SearchHeader
                value={searchValue}
                onChange={onSearchValueChange}
                placeholder="Search Pokemon"
            />
            <PokedexContent
                pokemon={pokemon}
                pokemonDetails={pokemonDetails}
                onGetDetails={onGetDetails}
            />
        </div>
    );
}

export default App;
