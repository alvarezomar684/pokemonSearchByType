export const getUrlPokemon = async queryTerm => {
    const url = `https://pokeapi.co/api/v2/type/${queryTerm}`
    const response = await fetch(url).then(res => res.json())    
    return response
}
