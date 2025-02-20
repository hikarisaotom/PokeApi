import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Pokemon } from '../../domainInterfaces';

interface PokemonProps {
    pokemon: Pokemon;
}
const PokemonInfo = ({pokemon}:PokemonProps) => {
    //TODO: Add more information
    return (
        <View style={styles.detailsContainer}>
            <Image source={{ uri: pokemon.sprites.front_default }} style={styles.pokemonImage} />
            <Text style={styles.infoText}>Altura: {pokemon.height}</Text>
            <Text style={styles.infoText}>Peso: {pokemon.weight}</Text>
            <Text style={styles.infoText}>Experiencia: {pokemon.base_experience}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        alignItems: 'center',
    },
    pokemonImage: {
        width: 100,
        height: 100,
        marginVertical: 10,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 4,
    },
});
export default PokemonInfo;
