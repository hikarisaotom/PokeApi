import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { BasePokemon } from '../../Interfaces';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface PokemonCardProps {
    pokemon: BasePokemon;
    onPress?: () => void;
}
const placeHolder = 'https://cdn.dribbble.com/users/6245075/screenshots/16269935/pokeball.png'; 
const PokemonCard = ({ pokemon, onPress }: PokemonCardProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: placeHolder }} style={styles.image} />
                <Text style={styles.name}>{pokemon.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

// TODO: Move this to a separate file and import it
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        backgroundColor: Colors.lighter,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        width: '90%',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
});

export default PokemonCard;
