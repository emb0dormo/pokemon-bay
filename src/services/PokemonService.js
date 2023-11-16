// src/services/PokemonService.js
import axios from 'axios';

const BASE_URL = 'https://raw.githubusercontent.com/your-username/your-repo-name/main';

export async function getPokemons() {
  try {
    const response = await axios.get(`${BASE_URL}/db.json`);
    return response.data.pokemons;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return [];
  }
}
