import {
    formatPokemonMoves,
    formatPokemonTypes,
} from './';

describe('formatPokemonMoves', () => {
    it('should return an array of move strings', () => {
        const mock_moves = [
            { move: { name: 'hypnosis' } },
            { move: { name: 'shadow-ball' } },
            { move: { name: 'dream-eater' } },
        ];

        const expected = [
            'hypnosis',
            'shadow-ball',
            'dream-eater',
        ];

        const actual = formatPokemonMoves(mock_moves);
        expect(expected).toEqual(actual);
    });
});

describe('formatPokemonTypes', () => {
    it('should return an array of types strings', () => {
        const mock_types = [
            { type: { name: 'ghost' } },
            { type: { name: 'poison' } },
        ];

        const expected = [
            'ghost',
            'poison',
        ];

        const actual = formatPokemonTypes(mock_types);
        expect(expected).toEqual(actual);
    });
});

// todo would continue to write more cases covering all the utilities
// also todo testing-library for our components