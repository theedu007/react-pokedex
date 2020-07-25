import { POKE_ENDPOINT } from './pokeApiEnpoint';

export const getPokemonData = (searchData) => {
    const fetchResult = fetch(`${POKE_ENDPOINT}/${searchData}`)
                        .then(response => (response.json()));
    
    return fetchResult;
}

export const getPokemonSpecies = (pokemonSpeciesUrl) => {
    const fetchResult = fetch(pokemonSpeciesUrl)
                        .then(response => response.json());

    return fetchResult;
}
