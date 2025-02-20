import AsyncStorage from '@react-native-async-storage/async-storage';
import { BasePokemon } from './Interfaces';

const POKEMON_LIST_KEY = 'pokemon_list';

const localStorageService = {
    // Guardar la lista de Pokémon
    savePokemonList: async (data: BasePokemon[]) => {
        try {
            await AsyncStorage.setItem(POKEMON_LIST_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Error:', error);
        }
    },

    // Leer la lista de Pokémon
    readPokemonList: async (): Promise<BasePokemon[]> => {
        try {
            const pokemonList = await AsyncStorage.getItem(POKEMON_LIST_KEY);
            return pokemonList ? JSON.parse(pokemonList) as BasePokemon[] : [];
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    },
};

export default localStorageService;
