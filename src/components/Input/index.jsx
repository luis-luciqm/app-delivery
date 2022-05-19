import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export function Input(){

    return (
        <View>
            <TextInput
                style={[styles.input, styles.showDrop]}
                placeholder="Buscar..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 320,
        height: 54,
        left: 40,
        top: 82,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20, 
    },

    showDrop: {
        elevation: 8,
    },
});