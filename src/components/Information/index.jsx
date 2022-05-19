import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export function Information(){
    return (
        <View style={styles.information}>
            <View style={styles.send}>
                <Image style={styles.image} source = {require('../../assets/img/motorcycle.png')} />
                <Text style={styles.send2}>Entrega: 30min / 1h</Text>
                <View style={styles.fundoOpen}>
                    <Text style={styles.open}>ABERTO</Text>
                </View>
                
            </View>
            <View style={styles.send}>
                <Image style={styles.image} source = {require('../../assets/img/maos.png')} />
                <Text style={styles.send2}>Retirada: 15min</Text>
                <View>
                    <Text style={styles.open2}>+ Informações</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    information: {
        width: 320,
        height: 70,
        left: 40,
        top: 60,

        backgroundColor: '#F7FAFB',
        borderRadius: 12
    },

    image: {
        width: 24,
        height: 24
    },

    send: {
        display: 'flex',
        flexDirection: 'row',
        left: 8,
        top: 12
    },

    open: {
        color:  '#46DE99',
        left: 14,
        fontSize: 11,
        fontWeight: 'bold'
    },

    open2: {
        color: '#0F88FF', 
        textDecorationLine: 'underline',
        left: 90,
        fontSize: 11,
        fontWeight: 'bold'
    },

    send2: {
        marginLeft: 8,
    },

    fundoOpen: {
        backgroundColor: '#46DE991A',
        left: 70,
        width: 70,
        borderRadius: 20,
        height: 16
    }
});