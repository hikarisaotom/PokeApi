import axios from 'axios';
import { BasePokemon, BaseResponse } from './Interfaces';
import { Pokemon } from './domainInterfaces';
import localStorageService from './localStorageService';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const apiService = {
  getPokemonData: async (): Promise<BasePokemon[]> => {
    try {
      let url = BASE_URL + '?limit=20&offset=0';
      const localData = await localStorageService.readPokemonList();
      if(localData.length > 0){
        console.log('Local data:', localData);
        return localData;
      }
      const response = await fetchData(url) as BaseResponse;
      await localStorageService.savePokemonList(response.results);
      console.log('Remote data:', response);
      return response.results ?? [];
    } catch (error) {
       return [];
      }
    },
    getPokemonDetail: async (url:string): Promise<Pokemon | null> => {
        try {
            const response = await fetchData(url) as Pokemon;
            return response;
        }catch(error){
            return null;
        }
    },
    searchPokemon: async (name:string): Promise<Pokemon | null> => {
      try {
        const url = `${BASE_URL}/${name}`;
        console.log('URL:', url);
          const response = await fetchData(url) as Pokemon;
          return response;
      }catch(error){
          return null;
      }
  },
};

export default apiService;
