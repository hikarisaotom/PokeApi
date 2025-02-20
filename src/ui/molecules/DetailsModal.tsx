import React, { useEffect, useState } from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import usePokemonHooks from '../../hooks/usePokemonHooks';
import { Pokemon } from '../../domainInterfaces';
import PokemonInfo from './Pokemon';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ModalProps {
    modalVisible: boolean;
    onClose: () => void;
    pokemonUrl: string;
}

const DetailsModal = ({ modalVisible, onClose, pokemonUrl }: ModalProps) => {
    const { getPokemonDetail } = usePokemonHooks();
    const [pokemonDetail, setPokemonDetail] = useState<Pokemon | null>(null);

    useEffect(() => {
        if (modalVisible) {
            getPokemonDetail(pokemonUrl).then((data) => {
                setPokemonDetail(data);
            });
        }
    }, [pokemonUrl]);

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={onClose}>
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>✕</Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>{pokemonDetail?.name ?? 'UPS! algo salio mal :('}</Text>
                    </View>
                    {pokemonDetail ? (
                        //TODO: Add more information
                      <PokemonInfo pokemon={pokemonDetail} />
                    ) : (
                        <Text style={styles.errorText}> Lo sentimos,algo salio mal y no se puede cargar la información :C</Text>
                    )}
                </View>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10,
    },
    closeButton: {
        fontSize: 22,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    errorText: {
        fontSize: 16,
        marginVertical: 4,
    },
});

export default DetailsModal;
