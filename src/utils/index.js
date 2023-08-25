// recursively grab all the evolutions and return an array of evolution names
const _getEvolutions = (evolution) => {
    const name = evolution?.species?.name;

    if (evolution?.evolves_to.length === 0) {
        return [name];
    }

    let names = [name];
    evolution?.evolves_to?.forEach((ev) => {
        names = names.concat(_getEvolutions(ev));
    });

    return names;
}

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

export const getEvolutionChainIdFromSpecies = (species) => {
    const {
        evolution_chain: {
            url,
        },
    } = species;

    const urlArr = url?.split('/').filter(Boolean);
    const chainId = urlArr[urlArr.length - 1];

    if (isNaN(Number(chainId))) {
        throw new Error('Invalid evolution chain id format');
    }

    return chainId;
}

export const formatPokemonEvolutions = (pokemonEvolutions) => {
    const { chain } = pokemonEvolutions;
    return _getEvolutions(chain);
}
