import { useEffect, useState } from "react";
import { fetchAllPokemon } from "../api";

const useFetchPokemon = () => {
    const [pokemonIndex, setPokemonIndex] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            setIsLoading(true);

            try {
                const { results: pokemonList } = await fetchAllPokemon();
                setPokemonIndex(pokemonList);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPokemon();
    }, []);

    return { pokemonIndex, isLoading, errorMessage };
};

export default useFetchPokemon;
