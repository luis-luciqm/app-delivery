import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Options(){

    const arrayDatas = [
        'Destaques',
        'Á lá carte',
        'Executivos',
        'Hamburguer',
        'Hor Dog',
        'Açaí',
        'Sanduíche',
    ]

    return (
        <FlatList
        data={arrayDatas}
        horizontal = {true}
        ItemSeparatorComponent={() => <View style={{width: 8}}></View> } // cria um objeto que separa os cards
        renderItem={({item, index})=>{
            return (
                <View style={styles.options}>
                    <Text style={styles.texts}>{item}</Text>
                </View>
            )
        }}
        />
    )
}

const styles = StyleSheet.create({
    options: {
        marginTop: 120,
        left: 40,
        backgroundColor: '#F9B233',
        height: 24,
        width: 88,
        alignItems: 'center',
        borderRadius: 24,
        marginBottom: -300
        
    },

    texts: {
        fontWeight: 'bold',
    }

});