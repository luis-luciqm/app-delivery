import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Options(){

    const arrayDatas = [
        'Destaques',
        'A lá card',
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
        ItemSeparatorComponent={() => <View style={{width: 8}}></View> }
        renderItem={({item, index})=>{
            return (
                <View style={styles.options}>
                    <Text>{item}</Text>
                </View>
            )
        }}
        />
    )
}

const styles = StyleSheet.create({
    options: {
        top: 88,
        left: 12

    },

    texts: {
        left: 190,

    }

});