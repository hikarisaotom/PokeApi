import { useEffect, useState } from 'react';
import { BasePokemon } from '../Interfaces';
import apiService from '../client';

const usePokemonHooks = () => {
    const [pokemons, setPokemons] = useState<BasePokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        // Load information at the beginning
        setLoading(true);
        apiService.getPokemonData().then((data) => {
            console.log(data);
            if (data) {
                setPokemons(data);
            }
            setLoading(false);
        }
        ).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    const getPokemonDetail = async (url: string) => {
        return await apiService.getPokemonDetail(url);
    };
    const searchPokemon = async (query: string) => {
        return await apiService.searchPokemon(query);
    };

    return { pokemons, loading, getPokemonDetail, searchPokemon };
};

export default usePokemonHooks;
