export const formatPokemonTypes = (pokemonTypes) =>
    pokemonTypes?.map((t) => {
        const {
            type: {
                name,
            },
        } = t;

        return name;
    });

export const formatPokemonMoves = (pokemonMoves) =>
    pokemonMoves?.map((m) => {
        const {
            move: {
                name,
            },
        } = m;

        return name;
    });