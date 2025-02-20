import React, { useState, useEffect } from 'react';
import { Text, useColorScheme, View, TextInput, FlatList, StyleSheet } from 'react-native';
import usePokemonHooks from '../../hooks/usePokemonHooks';
import PokemonCard from '../molecules/PokemonCard';
import DetailsModal from '../molecules/DetailsModal';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Pokemon } from '../../domainInterfaces';
import PokemonInfo from '../molecules/Pokemon';

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const { pokemons, loading, searchPokemon } = usePokemonHooks();
    const [modalVisible, setModalVisible] = useState(false);
    const [pokemonName, setPokemonName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedPokemon, setSearchedPokemon] = useState<Pokemon|null>(null);

    useEffect(() => {
        if (searchQuery.length > 3) {
            searchPokemon(searchQuery).then((data) => {
                console.log('RESULT',data);
                setSearchedPokemon(data);
            });
        }else{
            setSearchedPokemon(null);
        }
    }, [searchQuery]);

    const handlePress = (name:string) => {
        setModalVisible(true);
        setPokemonName(name);
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }]}> 
            <TextInput
                style={styles.searchBar}
                placeholder="Search Pokémon..."
                placeholderTextColor={Colors.black}
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            {loading && <Text>Loading...</Text>}
            { searchedPokemon && <PokemonInfo key={searchedPokemon.name} pokemon={searchedPokemon} />}
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <PokemonCard key={item.name} pokemon={item} onPress={() => handlePress(item.url)} />
                )}
            />
            <DetailsModal modalVisible={modalVisible} onClose={() => setModalVisible(false)} pokemonUrl={pokemonName} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;
