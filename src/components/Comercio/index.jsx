import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logs } from 'expo';
import { Image } from 'react-native';

export default function Comercio(){
    return (
        <View style={styles.commerce}>
            <Image source = {require('../../assets/img/logotioComerce.png')} />
            <Text style={styles.textComerce}>Restaurante e Pizzaria Divino Sabor</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    commerce: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 24,
        marginLeft: -34
    },

    textComerce: {
        fontWeight: 'bold',
        fontSize: 20,
        maxWidth: 250,
        marginLeft: 16
    }

});