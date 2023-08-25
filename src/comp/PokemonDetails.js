function PokemonDetails({ name, moves, types, evolutions }) {
    return (
        <div className={'pokedex__details'}>
            <div className={'pokedex__details-content'}>
                <b>{name}</b>
                <div className={'pokedex__details-info'}>
                    <div className={'pokedex__details-types'}>
                        <b>Types</b>
                        <ul>
                            {types?.map((type, i) => (
                                <li key={`${type}${i}`}>{type}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={'pokedex__details-moves'}>
                        <b>Moves</b>
                        <ul>
                            {moves?.map((move, i) => (
                                <li key={`${move}${i}`}>{move}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={'pokedex__details-evolutions'}>
                    <b>Evolutions</b>
                    <div className={'pokedex__details-evochain'}>
                        {evolutions?.map((evo, i) => (
                            <i key={`${evo}${i}`}>{evo}</i>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;
